import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TempUserService } from './temp-user.service';

@ApiTags('TempUser')
@Controller('temp-user')
export class TempUserController {
  constructor(private tempUserService: TempUserService) {}

  @Get()
  async checkAndCreateTeporaryUser(@Query('id') id: string) {
    return await this.tempUserService.createTeporaryUser({ uuid: id });
  }
}
