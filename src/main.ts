import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';


async function bootstrap() {

  const port = 3000

  const app = await NestFactory.create(AppModule, {cors:true});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, ()=> {Logger.log(port)});
}


bootstrap();
