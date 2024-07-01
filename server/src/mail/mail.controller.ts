import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MailService } from './mail.service';

@ApiTags('Mail')
@Controller('mail')
export class MailController {
  constructor(private mailService: MailService) {}

  @Get('/test')
  async sendMailForTest() {
    return this.mailService.sendMailForTest();
  }
}
