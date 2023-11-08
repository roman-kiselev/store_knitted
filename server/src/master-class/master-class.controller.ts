import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Role } from 'src/auth/role-auth.decorator';
import { RoleGuard } from 'src/auth/roles.guard';
import { CreateMasterClassDto } from './dto/create-master-class.dto';
import { MasterClassService } from './master-class.service';

@Controller('master-class')
export class MasterClassController {
  constructor(private masterClassService: MasterClassService) {}

  @Role('admin')
  @UseGuards(RoleGuard)
  @Get('/')
  getAllMasterClass() {
    return this.masterClassService.getAllMasterClass();
  }

  @Role('admin')
  @UseGuards(RoleGuard)
  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return this.masterClassService.getOneMasterClassById(id);
  }

  @Role('admin')
  @UseGuards(RoleGuard)
  @Post('/')
  createMasterClass(@Body() dto: CreateMasterClassDto) {
    return this.masterClassService.create(dto);
  }
}
