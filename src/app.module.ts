import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TokensModule } from './tokens/tokens.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule,TokensModule, AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/tesla',  {
    autoIndex: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
