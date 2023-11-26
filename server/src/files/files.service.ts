import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
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
}
