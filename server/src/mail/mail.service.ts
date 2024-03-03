import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as nodemailer from 'nodemailer';
import { FilesService } from 'src/files/files.service';
import { MasterClass } from 'src/master-class/master-class.model';

@Injectable()
export class MailService {
  constructor(
    @InjectModel(MasterClass) private masterClassRepository: typeof MasterClass,
    private filesService: FilesService,
  ) {}

  async sendMailForTest() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,

      auth: {
        user: 'romka58russia@gmail.com',
        pass: 'tkjz melp utly xaac',
      },
    });
    // 402405818qip@gmail.com
    // t89875041999@yandex.ru
    const pattern = await this.masterClassRepository.findOne({
      where: { id: 6 },
      include: { all: true },
    });
    const { files } = pattern;
    // console.log(files);
    const path = await this.filesService.getFilePath(files.nameRu);
    console.log(path);

    const mailOptions = {
      from: 'romka58russia@gmail.com',
      to: '402405818qip@gmail.com',
      subject: 'Первое письмо с сайта с файлом',
      text: 'Первое письмо с сайта c файлом',
      attachments: [
        {
          filename: files.nameRu,
          path,
        },
      ],
    };
    // tkjz melp utly xaac
    // Отправляем письмо
    const info = await transporter.sendMail(mailOptions);

    console.log(info);
    console.log('Message sent: %s', info.messageId);
  }

  async sendPattern(dto: SendPatternDto) {
    try {
      const { language, email, masterClassId } = dto;
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,

        auth: {
          user: 'romka58russia@gmail.com',
          pass: 'tkjz melp utly xaac',
        },
      });

      const pattern = await this.masterClassRepository.findOne({
        where: { id: masterClassId },
        include: { all: true },
      });

      const { files } = pattern;
      const path = await this.filesService.getFilePath(
        language === 'ru' ? files.nameRu : files.nameEng,
      );

      const mailOptions = {
        from: 'romka58russia@gmail.com',
        to: email,
        subject:
          language === 'ru'
            ? `Мастер-класс ${pattern.nameRu}`
            : `Master class ${pattern.nameEng}`,
        text: language === 'ru' ? `Файл во вложении` : `File in attachment`,
        attachments: [
          {
            filename: files.nameRu,
            path,
          },
        ],
      };
      // Отправляем письмо
      const info = await transporter.sendMail(mailOptions);

      console.log(info.pending);
      console.log(info.messageId);
      console.log(info.rejected);

      return info.messageId;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
