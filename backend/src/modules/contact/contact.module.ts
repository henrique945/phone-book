//#region Imports

import { Module } from '@nestjs/common';
import { PrismaService } from '../../infra/prisma/service/prisma.service';
import { ContactController } from './controllers/contact.controller';
import { ContactService } from './services/contact.service';

//#endregion

@Module({
  controllers: [
    ContactController,
  ],
  providers: [
    ContactService,
    PrismaService,
  ],
  exports: [
    ContactService,
  ],
})
export class ContactModule {}
