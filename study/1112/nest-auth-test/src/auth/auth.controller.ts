import {
  Controller,
  Post,
  Body,
  // Request,
  Req,
  // Response,
  Res,
  UseGuards,
  Get,
} from '@nestjs/common';
import type { Response as ExpressResponse } from 'express';
import type { Request as ExpressRequest } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/user.dto';
import {
  LoginGard,
  LocalAuthGuard,
  AuthenticatedGuard,
  GoogleAuthGuard,
} from './auth.guard';
import { LoginDto } from 'src/user/user.dto';
import { User } from 'src/user/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register(@Body() userDto: CreateUserDto) {
    return this.authService.register(userDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: ExpressResponse) {
    const userInfo = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );

    if (userInfo) {
      res.cookie('login', JSON.stringify(userInfo), {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
      });
    } else {
      console.log('not match password');
    }
    return res.send({ message: 'login success' });
  }

  @UseGuards(LoginGard)
  @Post('/login2')
  login2(@Req() req: ExpressRequest, @Res() res: ExpressResponse) {
    if (!req.cookies['login'] && req.user) {
      res.cookie('login', JSON.stringify(req.user), {
        httpOnly: true,
        // maxAge: 1000 * 60 * 60 * 24, //1day
        maxAge: 1000 * 10, //test
      });
    }
    return res.send({ message: 'login2 success' });
  }

  @UseGuards(LoginGard)
  @Get('test-guard')
  testGuard() {
    return '로그인된 때만 이 글이 보입니다';
  }

  @UseGuards(LocalAuthGuard)
  @Post('login3')
  login3(@Req() req: ExpressRequest) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('test-guard2')
  testGuardWithSession(@Req() req: ExpressRequest) {
    return req.user;
  }

  @Get('to-google')
  @UseGuards(GoogleAuthGuard)
  googleAuth(@Req() req) {
    console.log(req);
  }

  //(구글콘솔드라이브)승인된 리디렉션 URI : http://localhost:3000/auth/google
  @Get('google')
  @UseGuards(GoogleAuthGuard)
  googleAuthRedirect(@Body() user: User, @Res() res: ExpressResponse) {
    console.log(user);
    return res.send(user);
  }
}
