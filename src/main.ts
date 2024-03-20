import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {

  const app = await NestFactory.create(AppModule, {cors:true});
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
const port = configService.get<number>('PORT');
  await app.listen(port, ()=> {Logger.log(port)});
}


bootstrap();
