//#region Imports

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Contact } from '@prisma/client';
import { CreateContactPayload } from '../models/create-contact.payload';
import { UpdateContactPayload } from '../models/update-contact.payload';
import { ContactService } from '../services/contact.service';

//#endregion

@Controller('category')
export class ContactController {

  constructor(
    private readonly contactService: ContactService,
  ) {}

  @Get()
  public async listCategories(): Promise<Contact[]> {
    return await this.contactService.list();
  }

  @Post()
  public async createContact(@Body() payload: CreateContactPayload): Promise<Contact> {
    return await this.contactService.create(payload);
  }

  @Put(':id')
  public async updateContact(@Param('id') id: string, @Body() payload: UpdateContactPayload): Promise<Contact> {
    return await this.contactService.update(+id, payload);
  }

  @Delete(':id')
  public async deleteContact(@Param('id') id: string): Promise<Contact> {
    return await this.contactService.delete(+id);
  }

}
