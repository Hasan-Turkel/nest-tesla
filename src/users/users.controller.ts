import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto, SendOrderDto } from 'src/dto/dto';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get()
  getAll(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<User> {
    return this.UsersService.findOne(id);
  }

  @Post()
  create(@Body() user: CreateUserDto): Promise<User> {
    return this.UsersService.create(user);
  }
  @Put(':id')
  update(@Param('id') id, @Body() user:any): Promise<User> {
    return this.UsersService.update(id, user);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<User> {
    return this.UsersService.delete(id);
  }
}
