import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/users.schema';
import { Token, TokenSchema } from '../tokens/tokens.schema';


@Module({
   imports:[MongooseModule.forFeature([{name:User.name, schema:UserSchema}]), MongooseModule.forFeature([{name:Token.name, schema:TokenSchema}])],
   controllers:[AuthController],
   providers:[AuthService]
})
export class AuthModule {}

