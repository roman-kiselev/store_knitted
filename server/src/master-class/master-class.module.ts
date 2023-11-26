import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { FilesMasterClass } from 'src/files-master-class/files-master-class.model';
import { FilesModule } from 'src/files/files.module';
import { PatternParams } from 'src/pattern-params/pattern-params.model';
import { MasterClassController } from './master-class.controller';
import { MasterClass } from './master-class.model';
import { MasterClassService } from './master-class.service';

@Module({
  controllers: [MasterClassController],
  providers: [MasterClassService],
  imports: [
    SequelizeModule.forFeature([FilesMasterClass, MasterClass, PatternParams]),
    AuthModule,
    FilesModule,
  ],
})
export class MasterClassModule {}
