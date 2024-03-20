import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.schema';
import { Token, TokenSchema } from 'src/tokens/tokens.schema';


@Module({
   imports:[ MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema = UserSchema;
          schema.plugin(require('mongoose-unique-validator'), { message: 'your custom message' }); // or you can integrate it without the options   schema.plugin(require('mongoose-unique-validator')
          return schema;
        },
      },
    ]),MongooseModule.forFeature([{name:Token.name, schema:TokenSchema}])],
   controllers:[UsersController],
   providers:[UsersService]
})
export class UsersModule {}
