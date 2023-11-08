import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

interface RequestWithUser extends Request {
  user: any;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/check')
  checkAuth(@Req() req: RequestWithUser) {
    return this.authService.checkAuth(req.user);
  }

  @Post('/registration')
  registration(@Body() dto: UserDto) {
    return this.authService.registration(dto);
  }

  @Post('/login')
  login(@Body() dto: UserDto) {
    return this.authService.login(dto);
  }
}
