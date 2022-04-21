import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Remove unwanted keys from the request
      whitelist: true,
      // Enable this is you want to throw error when unwanted keys are sent by the user
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
