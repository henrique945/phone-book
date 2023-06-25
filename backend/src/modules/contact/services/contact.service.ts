//#region Imports

import { Injectable, NotFoundException } from '@nestjs/common';
import { Contact, Prisma } from '@prisma/client';
import { PrismaService } from '../../../infra/prisma/service/prisma.service';
import { isValid } from '../../../utils/functions';
import { CreateContactPayload } from '../models/create-contact.payload';
import { UpdateContactPayload } from '../models/update-contact.payload';

//#endregion

@Injectable()
export class ContactService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  public async list(): Promise<Contact[]> {
    return await this.prisma.contact.findMany();
  }

  public async create(payload: CreateContactPayload): Promise<Contact> {
    return this.prisma.contact.create({
      data: this.getDataFromPayload(payload),
    });
  }

  public async update(id: number, payload: UpdateContactPayload): Promise<Contact> {
    const contact: Contact = await this.prisma.contact.findFirst({
      where: { id },
    });

    if (!contact)
      throw new NotFoundException('Contact not found.');

    return await this.prisma.contact.update({
      where: { id },
      data: this.getDataFromPayload(payload),
    });
  }

  public async delete(id: number): Promise<Contact> {
    const contact: Contact = await this.prisma.contact.findFirst({
      where: { id },
    });

    if (!contact)
      throw new NotFoundException('Contact not found.');

    return this.prisma.contact.delete({
      where: { id },
    });
  }

  private getDataFromPayload(payload: CreateContactPayload | UpdateContactPayload): Prisma.ContactCreateInput {
    return {
      ...isValid(payload.firstName) && { firstName: payload.firstName },
      ...isValid(payload.lastName) && { lastName: payload.lastName },
      ...isValid(payload.phone) && { phone: payload.phone },
    };
  }
}
