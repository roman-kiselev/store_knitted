import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from 'src/role/role.model';
import { UserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    @InjectModel(Role) private roleRepository: typeof Role,
  ) {}

  // Создаём пользователя
  async create(dto: UserDto) {
    try {
      const { name, email, password, nameRole = 'user' } = dto;
      // Проверяем есть ли с таким наименованием и почтой (они должны быть уникальными)
      const findedName = await this.userRepository.findOne({
        where: {
          name,
        },
      });
      const findedEmail = await this.userRepository.findOne({
        where: {
          email,
        },
      });
      if (findedName || findedEmail) {
        throw new HttpException(
          'Пользователь стакими данными существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      // Найдём роль по имени
      const role = await this.roleRepository.findOne({
        where: { name: nameRole },
      });
      const newUser = await this.userRepository.create({
        name,
        email,
        password,
        roleId: role.id,
      });
      if (!newUser) {
        throw new HttpException(
          'Не удалось создать пользователя',
          HttpStatus.BAD_REQUEST,
        );
      }
      return newUser;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findUserByEmail(email: string) {
    try {
      const user = await this.userRepository.findOne({ where: { email } });
      if (!user) {
        throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND);
      }
      return user;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async checkByEmail(email: string) {
    try {
      const user = await this.userRepository.findOne({ where: { email } });
      if (!user) {
        return false;
      }
      return true;
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      }
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
