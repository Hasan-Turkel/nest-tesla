import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CreateCarDto } from 'src/dto/dto';
  import { CarsService } from './cars.service';
  import { Car } from './cars.schema';
  
  @Controller('cars')
  export class CarsController {
    constructor(private CarsService: CarsService) {}
  
    @Get()
    getAll(): Promise<Car[]> {
      return this.CarsService.findAll();
    }
  
    @Get(':id')
    getOne(@Param('id') id: string): Promise<Car> {
      return this.CarsService.findOne(id);
    }
  
    @Post()
    create(@Body() car: CreateCarDto): Promise<Car> {
      return this.CarsService.create(car);
    }
    @Put(':id')
    update(@Param('id') id, @Body() car: CreateCarDto): Promise<Car> {
      return this.CarsService.update(id, car);
    }
    @Delete(':id')
    delete(@Param('id') id): Promise<Car> {
      return this.CarsService.delete(id);
    }
  }
  