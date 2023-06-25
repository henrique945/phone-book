//#region Imports

import { ContactInterface } from '../../models/contact.interface.ts';
import httpService from '../http/http.service.ts';

//#endregion

export default {
  getAll: async (): Promise<ContactInterface[]> => {
    return await httpService.get('contact');
  },
  create: async (body: ContactInterface): Promise<ContactInterface> => {
    return await httpService.post('contact', body);
  },
  update: async (id: number, body: ContactInterface): Promise<ContactInterface> => {
    return await httpService.update(`contact/${ id }`, body);
  },
  delete: async (id: number): Promise<ContactInterface> => {
    return await httpService.delete(`contact/${ id }`);
  },
};
