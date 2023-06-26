//#region Imports

import { ChangeEvent, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiPlusMedical, BiSolidContact } from 'react-icons/bi';
import Modal, { Styles } from 'react-modal';
import ContactItem from '../components/contact-item/ContactItem.tsx';
import CreateContact from '../modals/create-contact/CreateContact.tsx';
import { ContactInterface } from '../models/contact.interface.ts';
import contactService from '../services/contact/contact.service.ts';
import './Home.css';

//#endregion

export default function Home() {
  useEffect(() => {
    const loadContacts = async () => {
      const contacts = await contactService.getAll();
      setInitialListContacts(contacts);
      setListContacts(contacts);
    };

    loadContacts();
  }, []);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false);
  const [initialListContacts, setInitialListContacts] = useState<ContactInterface[]>([]);
  const [listContacts, setListContacts] = useState<ContactInterface[]>([]);

  const filterContacts = (event: ChangeEvent<HTMLInputElement>) => {
    const text: string = event.target.value;

    if (!text || text === '')
      setListContacts(initialListContacts);
    else
      setListContacts(initialListContacts.filter(contact => contact.lastName.toLowerCase().includes(text.toLowerCase())));
  };

  const removeContactItem = async (id: number) => {
    await contactService.delete(id);
    const contactsFiltered: ContactInterface[] = initialListContacts.filter(contact => contact.id !== id);
    setListContacts(contactsFiltered);
    setInitialListContacts(contactsFiltered);
  };

  const openModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeModal = () => {
    setIsCreateModalOpen(false);
  };

  const customStyles: Styles = {
    overlay: {
      display: 'flex',
    },
    content: {
      width: '50vw',
      height: '50vh',
      padding: 0,
      border: '2px solid var(--color-success)',
      margin: 'auto',
    },
  };

  return (
    <div className="home">
      <Modal
        isOpen={ isCreateModalOpen }
        style={ customStyles }
        contentElement={ undefined }
        shouldCloseOnOverlayClick={ true }
      >
        <CreateContact close={ closeModal }></CreateContact>
      </Modal>

      <h1><BiSolidContact/> Phone Book App</h1>

      <div className="header">
        <strong>Contacts</strong>
        <button onClick={ openModal }><BiPlusMedical/> Add Contact</button>
      </div>

      <div className="search">
        <AiOutlineSearch/>
        <input onInput={ filterContacts } type="text" placeholder="Search for contact by last name..."/>
      </div>

      <div className="list">
        {
          listContacts.length === 0
            ? <span className="empty">No saved contacts</span>
            : listContacts.map(contact => (
              <div className="contact-item">
                <ContactItem
                  key={ contact.id }
                  id={ contact.id }
                  firstName={ contact.firstName }
                  lastName={ contact.lastName }
                  phone={ contact.phone }
                  removeContact={ removeContactItem }
                />
              </div>
            ))
        }
      </div>
    </div>
  );
}
