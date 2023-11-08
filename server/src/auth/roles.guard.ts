import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { ROLE_KEY } from './role-auth.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  private extractTokenFromHeader(req: Request): string | undefined {
    const [type, token] = req.headers.authorization.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRole = this.reflector.getAllAndOverride<string>(ROLE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requiredRole) {
        return true;
      }

      const req = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(req);
      if (!token) {
        throw new UnauthorizedException('Требуется авторизация');
      }
      const user = this.jwtService.verify(token);

      req.user = user;

      return user.nameRole;
    } catch (e) {
      throw new HttpException(
        'У пользователя нет доступа',
        HttpStatus.FORBIDDEN,
      );
    }
  }
}
