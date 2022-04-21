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
      // auto transform and handle type conversion for incoming request payloads
      // also performs primitive type conversion like bool and number
      // But this comes with the cost of performance, so make sure you have negligible performance issue before proceeding
      transform: true,
      transformOptions: {
        // We no longer have to specify types with type decorator in dto
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
