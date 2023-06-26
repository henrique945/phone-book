//#region Imports

import { ChangeEvent, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ContactInterface } from '../../models/contact.interface.ts';
import { EditModalInterface } from '../../models/edit.modal.interface.ts';
import contactService from '../../services/contact/contact.service.ts';
import './EditContact.css';

//#endregion

// TODO: adjust for mobile
export default function EditContact(modal: EditModalInterface) {
  const [body, setBody] = useState<ContactInterface>({
    id: modal.contact.id,
    firstName: modal.contact.firstName,
    lastName: modal.contact.lastName,
    phone: modal.contact.phone,
  });

  const updateContact = async () => {
    await contactService.update(body.id, body);

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
    <div className="edit-contact">
      <AiOutlineClose onClick={ closeModal }/>

      <h1>Edit contact { modal.contact.firstName }</h1>

      <form onSubmit={ updateContact }>
        <input value={ body.firstName } name="firstName" type="text" placeholder="First Name" onChange={ handleInputChange }/>
        <input value={ body.lastName } name="lastName" type="text" placeholder="Last Name" onChange={ handleInputChange }/>
        <input value={ body.phone } name="phone" type="text" placeholder="Phone" onChange={ handleInputChange }/>
        <button type="submit">Edit</button>
      </form>

    </div>
  );
}
