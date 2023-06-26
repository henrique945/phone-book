//#region Imports

import { ContactInterface } from './contact.interface.ts';
import { ModalInterface } from './modal.interface.ts';

//#endregion

export interface EditModalInterface extends ModalInterface {
  contact: ContactInterface;
}
