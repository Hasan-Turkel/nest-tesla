import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTokenDto } from 'src/dtos/dto';
import { TokensService } from './tokens.service';
import { Token } from './tokens.schema';

@Controller('tokens')
export class TokensController {
  constructor(private TokensService: TokensService) {}

  @Get()
  getAll(): Promise<Token[]> {
    return this.TokensService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<Token> {
    return this.TokensService.findOne(id);
  }

  @Post()
  create(@Body() token: CreateTokenDto): Promise<Token> {
    return this.TokensService.create(token);
  }
  @Put(':id')
  update(@Param('id') id, @Body() token: CreateTokenDto): Promise<Token> {
    return this.TokensService.update(id, token);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<Token> {
    return this.TokensService.delete(id);
  }
}
