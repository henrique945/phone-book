//#region Imports

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './infra/prisma/service/prisma.service';
import { ContactModule } from './modules/contact/contact.module';

//#endregion

@Module({
  imports: [
    ConfigModule.forRoot(),
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
