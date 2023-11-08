import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MasterClass } from 'src/master-class/master-class.model';
import { FilesMasterClassController } from './files-master-class.controller';
import { FilesMasterClass } from './files-master-class.model';
import { FilesMasterClassService } from './files-master-class.service';

@Module({
  controllers: [FilesMasterClassController],
  providers: [FilesMasterClassService],
  imports: [SequelizeModule.forFeature([MasterClass, FilesMasterClass])],
})
export class FilesMasterClassModule {}
