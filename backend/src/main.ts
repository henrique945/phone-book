//#region Imports

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './infra/prisma/service/prisma.service';

//#endregion

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}

bootstrap();
