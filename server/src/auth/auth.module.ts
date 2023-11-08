import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RoleModule } from 'src/role/role.module';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY || 'secret2',
      signOptions: { expiresIn: '10h' },
    }),
    forwardRef(() => UserModule),
    RoleModule,
  ],
  exports: [AuthModule, JwtModule],
})
export class AuthModule {}
