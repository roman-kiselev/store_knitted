import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ImagesMasterClassDto } from './dto/images-master-class.dto';
import { ImagesMasterClass } from './images-master.model';

@Injectable()
export class ImagesMasterClassService {
  constructor(
    @InjectModel(ImagesMasterClass)
    private imageMasterClassRepository: typeof ImagesMasterClass,
  ) {}

  async createImage(dto: ImagesMasterClassDto) {
    try {
      const response = {
        originalname: dto.file.originalname,
        filename: dto.file.filename,
      };
      const oneImage = await this.imageMasterClassRepository.create({
        name: dto.file.filename,
        masterClassId: dto.masterClassId,
      });

      return oneImage;
      // return {
      //   status: HttpStatus.OK,
      //   message: 'Изображение загружено успешно',
      //   data: response,
      // };
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
