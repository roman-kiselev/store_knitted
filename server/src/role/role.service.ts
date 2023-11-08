import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dto: CreateRoleDto) {
    try {
      console.log(dto);
      const [role, created] = await this.roleRepository.findOrCreate({
        where: {
          name: dto.name,
        },
        defaults: {
          description: dto.description,
        },
      });
      if (!created) {
        throw new HttpException('Роль уже существует', HttpStatus.BAD_REQUEST);
      }
      return role;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findRoleByName(name: string) {
    try {
      const findedRole = await this.roleRepository.findOne({ where: { name } });
      if (!findedRole) {
        throw new HttpException('Роль не найдена', HttpStatus.NOT_FOUND);
      }
      return findedRole;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findRoleById(id: number) {
    try {
      const findedRole = await this.roleRepository.findByPk(id);
      if (!findedRole) {
        throw new HttpException('Роль не найдена', HttpStatus.NOT_FOUND);
      }
      return findedRole;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllRoles() {
    try {
      const findedListRoles = await this.roleRepository.findAll();
      return findedListRoles;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
