//#region Imports

import { ChangeEvent, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ContactInterface } from '../../models/contact.interface.ts';
import { ModalInterface } from '../../models/modal.interface.ts';
import contactService from '../../services/contact/contact.service.ts';
import './CreateContact.css';

//#endregion

export default function CreateContact(modal: ModalInterface) {
  const [body, setBody] = useState<ContactInterface>({
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
  });

  const createContact = async () => {
    await contactService.create(body);

    closeModal();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBody({ ...body, [name]: value });
  };

  const closeModal = () => {
    modal.close();
  };

  return (
    <div className="create-contact">
      <AiOutlineClose onClick={ closeModal }/>

      <h1>Create new contact</h1>

      <form onSubmit={ createContact }>
        <input name="firstName" type="text" placeholder="First Name" onChange={ handleInputChange }/>
        <input name="lastName" type="text" placeholder="Last Name" onChange={ handleInputChange }/>
        <input name="phone" type="text" placeholder="Phone" onChange={ handleInputChange }/>
        <button type="submit">Create</button>
      </form>

    </div>
  );
}
