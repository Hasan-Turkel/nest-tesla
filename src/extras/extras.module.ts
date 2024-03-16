import { Module } from '@nestjs/common';
import { ExtrasController } from './extras.controller';
import { ExtrasService } from './extras.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Extra, ExtraSchema } from './extras.schema';


@Module({
   imports:[ MongooseModule.forFeatureAsync([
      {
        name: Extra.name,
        useFactory: () => {
          const schema = ExtraSchema;
          schema.plugin(require('mongoose-unique-validator'), { message: 'your custom message' }); // or you can integrate it without the options   schema.plugin(require('mongoose-unique-validator')
          return schema;
        },
      },
    ]),],
   controllers:[ExtrasController],
   providers:[ExtrasService]
})
export class ExtrasModule {}
