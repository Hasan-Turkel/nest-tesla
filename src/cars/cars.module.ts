import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './cars.schema';


@Module({
   imports:[ MongooseModule.forFeatureAsync([
      {
        name: Car.name,
        useFactory: () => {
          const schema = CarSchema;
          schema.plugin(require('mongoose-unique-validator'), { message: 'your custom message' }); // or you can integrate it without the options   schema.plugin(require('mongoose-unique-validator')
          return schema;
        },
      },
    ]),],
   controllers:[CarsController],
   providers:[CarsService]
})
export class CarsModule {}
