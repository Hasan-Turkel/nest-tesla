import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/dto';
import { User } from '../users/users.schema';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  
  @Post('login')
  create(@Body() user: CreateUserDto) {
    return this.AuthService.login(user.email, user.password);
  }

  @Post('register')
  register(@Body() user: CreateUserDto) {
    return this.AuthService.register(user);
  }

}
