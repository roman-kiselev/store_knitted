import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Role } from 'src/auth/role-auth.decorator';
import { RoleGuard } from 'src/auth/roles.guard';
import { CreateParameterToysDto } from './dto/create-parameter-toys.dto';
import { ParametrToysService } from './parametr-toys.service';

@Controller('parametr-toys')
export class ParametrToysController {
  constructor(private parametrToysService: ParametrToysService) {}

  @Role('admin')
  @UseGuards(RoleGuard)
  @Get('/')
  getAllParametr() {
    return this.parametrToysService.findAllParameters();
  }

  @Role('admin')
  @UseGuards(RoleGuard)
  @Get('/:id')
  getOneById(@Param('id') id: string) {
    return this.parametrToysService.findOneParametersById(id);
  }

  @Role('admin')
  @UseGuards(RoleGuard)
  @Get('/:name')
  getOneByName(@Param('name') name: string) {
    return {};
  }

  @Role('admin')
  @UseGuards(RoleGuard)
  @Post('/')
  createParametr(@Body() dto: CreateParameterToysDto) {
    return this.parametrToysService.createParametr(dto);
  }
}
