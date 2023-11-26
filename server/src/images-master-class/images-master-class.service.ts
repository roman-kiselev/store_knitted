import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ImagesMasterClassDto } from './dto/images-master-class.dto';
import { ImagesMasterClass } from './images-master.model';

@Injectable()
export class ImagesMasterClassService {
  constructor(
    @InjectModel(ImagesMasterClass)
    private imageMasterClassRepository: typeof ImagesMasterClass,
  ) {}

  async createImage(dto: ImagesMasterClassDto) {}
}
