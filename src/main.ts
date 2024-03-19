import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import * as fs from 'fs'
import  express  from 'express';

async function bootstrap() {

  const port = 3000

  const httpsOptions = {
    key: fs.readFileSync('./secrets/cert.key'),
    cert: fs.readFileSync('./secrets/cert.crt'),
  };

  
  const app = await NestFactory.create(AppModule, {cors:true});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, ()=> {Logger.log(port)});
}


bootstrap();
