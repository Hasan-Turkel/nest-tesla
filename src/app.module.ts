import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TokensModule } from './tokens/tokens.module';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { ExtrasModule } from './extras/extras.module';
import { ConfigService, ConfigModule } from '@nestjs/config';


@Module({
  imports: [UsersModule,TokensModule, AuthModule, CarsModule, ExtrasModule, TokensModule,  ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB'),
      }),
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
