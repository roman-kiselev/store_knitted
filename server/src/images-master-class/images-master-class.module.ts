import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MasterClass } from 'src/master-class/master-class.model';
import { ImagesMasterClassController } from './images-master-class.controller';
import { ImagesMasterClassService } from './images-master-class.service';
import { ImagesMasterClass } from './images-master.model';

@Module({
  controllers: [ImagesMasterClassController],
  providers: [ImagesMasterClassService],
  imports: [SequelizeModule.forFeature([MasterClass, ImagesMasterClass])],
})
export class ImagesMasterClassModule {}
