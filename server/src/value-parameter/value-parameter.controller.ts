import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from 'src/auth/role-auth.decorator';
import { RoleGuard } from 'src/auth/roles.guard';
import { CreateValueParameterDto } from './dto/create-value-parametr.dto';
import { ValueParameterService } from './value-parameter.service';

@ApiTags('ValueParameter')
@Controller('value-parameter')
export class ValueParameterController {
  constructor(private valueParametrService: ValueParameterService) {}

  @Role('admin')
  @UseGuards(RoleGuard)
  @Get('/')
  getAll() {
    return this.valueParametrService.findAllValue();
  }

  @Role('admin')
  @UseGuards(RoleGuard)
  @Get('/oneParam')
  getAllByIdParametr(@Query('id') id: string) {
    return this.valueParametrService.findAllForParametr(id);
  }

  @Role('admin')
  @UseGuards(RoleGuard)
  @Post('/')
  create(@Body() dto: CreateValueParameterDto) {
    return this.valueParametrService.createValue(dto);
  }
}
