import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { PDFDocument, StandardFonts, degrees, rgb } from 'pdf-lib';
import { IFiles } from 'src/master-class/interfaces/IFiles';

@Injectable()
export class FilesService {
  private async createFileForPattern(file: Express.Multer.File) {
    try {
      if (file) {
        const pathRes = path.resolve(
          __dirname,
          '..',
          '..',
          'uploads',
          'pattern',
        );

        if (!fs.existsSync(pathRes)) {
          fs.mkdirSync(pathRes, { recursive: true });
        }

        const filePath = path.join(pathRes, file.originalname);

        if (fs.existsSync(filePath)) {
          console.log;
          throw new HttpException(
            'Файл с таким именем уже существует',
            HttpStatus.BAD_REQUEST,
          );
        }

        fs.writeFileSync(path.join(pathRes, file.originalname), file.buffer);

        return file.originalname;
      }

      if (!file) {
        throw new HttpException('Файл не был загружен', HttpStatus.BAD_REQUEST);
      }
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async addFilesForPattern(files: IFiles) {
    try {
      const { fileEng, fileRu, mainImage } = files;

      if (fileRu && mainImage && fileEng) {
        const pathFileRu = await this.createFileForPattern(fileRu[0]);
        const pathFileEng = await this.createFileForPattern(fileEng[0]);
        const pathMainImage = await this.createFileForPattern(mainImage[0]);

        return {
          pathFileRu,
          pathFileEng: pathFileEng ? pathFileEng : '',
          pathMainImage,
        };
      }
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Получаем путь к файлу
  async getFilePath(name: string): Promise<string | null> {
    try {
      const pathRes = path.resolve(__dirname, '..', '..', 'uploads', 'pattern');

      if (fs.existsSync(path.join(pathRes, name))) {
        return path.join(pathRes, name);
      }
      return null;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // переносим файл для подготовки к отправке
  async copyFile(fileName: string) {
    try {
      const preparePath = path.resolve(
        __dirname,
        '..',
        '..',
        'uploads',
        'prepare',
      );
      const pathName = await this.getFilePath(fileName);

      fs.copyFileSync(pathName, path.join(preparePath, fileName));

      // Проваеряем существует ли путь к файлу
      if (fs.existsSync(path.join(preparePath, fileName))) {
        return path.join(preparePath, fileName);
      }
      return false;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async preparePdfFile(email: string, fileName: string) {
    try {
      const pathPdfPrepare = path.resolve(
        __dirname,
        '..',
        '..',
        'uploads',
        'prepare',
      );
      if (fs.existsSync(path.join(pathPdfPrepare, fileName))) {
        fs.readFile(path.join(pathPdfPrepare, fileName), async (err, data) => {
          if (err) {
            throw new HttpException(
              err.message,
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }
          const pdfDoc = await PDFDocument.load(data);
          const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

          const pages = pdfDoc.getPages();

          pages.map((item) => {
            const { width, height } = item.getSize();
            item.drawText(email, {
              x: 5,
              y: height - 15,
              size: 25,
              font: helveticaFont,
              color: rgb(0.95, 0.1, 0.1),
              // color: rgb(0.22, 0.22, 0.22),
              rotate: degrees(-45),
              opacity: 0.2,
            });

            item.drawText(email, {
              x: width / 3,
              y: height - 15,
              size: 25,
              font: helveticaFont,
              color: rgb(0.95, 0.1, 0.1),
              // color: rgb(0.22, 0.22, 0.22),
              rotate: degrees(-45),
              opacity: 0.2,
            });

            item.drawText(email, {
              x: width / 1.5,
              y: height - 15,
              size: 25,
              font: helveticaFont,
              color: rgb(0.95, 0.1, 0.1),
              //color: rgb(0.22, 0.22, 0.22),
              rotate: degrees(-45),
              opacity: 0.2,
            });

            // Вторая строка

            item.drawText(email, {
              x: 5,
              y: height - 300,
              size: 25,
              font: helveticaFont,
              color: rgb(0.95, 0.1, 0.1),
              //color: rgb(0.22, 0.22, 0.22),
              rotate: degrees(-45),
              opacity: 0.2,
            });

            item.drawText(email, {
              x: width / 3,
              y: height - 300,
              size: 25,
              font: helveticaFont,
              color: rgb(0.95, 0.1, 0.1),
              // color: rgb(0.22, 0.22, 0.22),
              rotate: degrees(-45),
              opacity: 0.2,
            });

            item.drawText(email, {
              x: width / 1.5,
              y: height - 300,
              size: 25,
              font: helveticaFont,
              // color: rgb(0.95, 0.1, 0.1),
              color: rgb(0.22, 0.22, 0.22),
              rotate: degrees(-45),
              opacity: 0.2,
            });
          });

          const pdfBytes = await pdfDoc.save();
          fs.writeFileSync(path.join(pathPdfPrepare, `${email}.pdf`), pdfBytes);
        });
      } else {
        console.log('Папка для подготовки не существует');
        throw new HttpException(
          'Папка для подготовки не существует',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
