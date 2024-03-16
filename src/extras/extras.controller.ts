import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateExtraDto } from 'src/dto/dto';
  import { ExtrasService } from './extras.service';
  import { Extra } from './extras.schema';
  
  @Controller('extras')
  export class ExtrasController {
    constructor(private ExtrasService: ExtrasService) {}
  
    @Get()
    getAll(): Promise<Extra[]> {
      return this.ExtrasService.findAll();
    }
  
    @Get(':id')
    getOne(@Param('id') id: string): Promise<Extra> {
      return this.ExtrasService.findOne(id);
    }
  
    @Post()
    create(@Body() extra: CreateExtraDto): Promise<Extra> {
      return this.ExtrasService.create(extra);
    }
    @Put(':id')
    update(@Param('id') id, @Body() extra: CreateExtraDto): Promise<Extra> {
      return this.ExtrasService.update(id, extra);
    }
    @Delete(':id')
    delete(@Param('id') id): Promise<Extra> {
      return this.ExtrasService.delete(id);
    }
  }
  