import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { FilesMasterClass } from 'src/files-master-class/files-master-class.model';
import { ImagesMasterClass } from 'src/images-master-class/images-master.model';
import { ParameterToys } from 'src/parametr-toys/parametr-toys.model';
import { MasterClassController } from './master-class.controller';
import { MasterClass } from './master-class.model';
import { MasterClassService } from './master-class.service';

@Module({
  controllers: [MasterClassController],
  providers: [MasterClassService],
  imports: [
    SequelizeModule.forFeature([
      ImagesMasterClass,
      FilesMasterClass,
      MasterClass,
      ParameterToys,
    ]),
    AuthModule,
  ],
})
export class MasterClassModule {}
