import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { MasterClass } from 'src/master-class/master-class.model';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  controllers: [MailController],
  providers: [MailService],

  imports: [SequelizeModule.forFeature([MasterClass]), FilesModule],
  exports: [MailService],
})
export class MailModule {}
