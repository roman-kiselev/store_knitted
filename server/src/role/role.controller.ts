import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleService } from './role.service';

@ApiTags('Role')
@ApiBearerAuth()
@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get('/')
  getAll() {
    return this.roleService.findAllRoles();
  }

  @Get('/:id')
  getOneById(@Param('id') id: number) {
    return this.roleService.findRoleById(id);
  }

  @Get('/:name')
  getOneByName(@Param('name') name: string) {
    return this.roleService.findRoleByName(name);
  }

  @Post('/')
  createRole(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }
}
