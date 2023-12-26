import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Role } from 'src/auth/role-auth.decorator';
import { RoleGuard } from 'src/auth/roles.guard';
import { CreateMasterClassDto } from './dto/create-master-class.dto';
import { IFiles } from './interfaces/IFiles';
import { MasterClassService } from './master-class.service';

@Controller('master-class')
export class MasterClassController {
  constructor(private masterClassService: MasterClassService) {}

  // @Role('admin')
  // @UseGuards(RoleGuard)
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

  // @Role('admin')
  // @UseGuards(RoleGuard)
  @Post('/')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'mainImage', maxCount: 1 },
      { name: 'fileRu', maxCount: 1 },
      { name: 'fileEng', maxCount: 1 },
    ]),
  )
  createMasterClass(
    @UploadedFiles()
    files: IFiles,
    @Body() dto: CreateMasterClassDto,
  ) {
    return this.masterClassService.create(dto, files);
  }
}
