import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RoleService } from 'src/role/role.service';
import { UserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.model';
import { UserService } from 'src/user/user.service';

interface UserWithNameRole {
  id: number;
  name: string;
  email: string;
  nameRole: string;
}

@Injectable()
export class AuthService {
  constructor(
    private roleService: RoleService,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  private generateToken(user: UserWithNameRole) {
    const { id, email, name, nameRole } = user;

    return {
      token: this.jwtService.sign({ id, email, name, nameRole }),
    };
  }

  private async validateUser(userDto: UserDto) {
    const user = await this.userService.findUserByEmail(userDto.email);
    if (!user) {
      throw new UnauthorizedException({ message: 'Неверный логин или пароль' });
    }

    if (user instanceof User) {
      // Сравниваем пароли
      const passwordEquals = await bcrypt.compare(
        userDto.password,
        user.password,
      );
      if (user && passwordEquals) {
        return user;
      }
    }
    throw new UnauthorizedException({ message: 'Неверный логин или пароль' });
  }

  async registration(dto: UserDto) {
    try {
      console.log(dto);
      const candidate = await this.userService.checkByEmail(dto.email);
      if (candidate) {
        throw new HttpException(
          'Пользователь с таким логином уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Если нет хэшируем пароль
      const hashPassword = await bcrypt.hash(dto.password, 5);

      // Создаём пользователя
      const user = await this.userService.create({
        ...dto,
        password: hashPassword,
      });
      const role = await this.roleService.findRoleById(user.roleId);
      // Создаём токен для пользователя
      if (user instanceof User) {
        return this.generateToken({
          id: user.id,
          name: user.name,
          email: user.email,
          nameRole: role.name,
        });
      }
    } catch (e) {
      if (e instanceof HttpException) {
        return e;
      }
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async login(userDto: UserDto) {
    const user = await this.validateUser(userDto);
    const role = await this.roleService.findRoleById(user.roleId);
    return this.generateToken({
      id: user.id,
      name: user.name,
      email: user.email,
      nameRole: role.name,
    });
  }

  async checkAuth(user: UserWithNameRole) {
    try {
      const role = await this.roleService.findRoleByName(user.nameRole);

      const token = this.generateToken({
        id: user.id,
        name: user.name,
        email: user.email,
        nameRole: role.name,
      });

      return token;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
