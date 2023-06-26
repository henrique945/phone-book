//#region Imports

import { useState } from 'react';
import { AiFillPhone, AiOutlineEdit } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import Modal, { Styles } from 'react-modal';
import EditContact from '../../modals/edit-contact/EditContact.tsx';
import { ContactInterface } from '../../models/contact.interface.ts';
import './ContactItem.css';

//#endregion

export default function ContactItem(contact: ContactInterface) {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

  const customStyles: Styles = {
    overlay: {
      display: 'flex',
    },
    content: {
      width: '50vw',
      height: '60vh',
      padding: 0,
      border: '1px solid var(--color-warning)',
      margin: 'auto',
    },
  };

  const removeContact = () => {
    contact.removeContact(contact.id);
  };

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="contact">
      <Modal
        isOpen={ isEditModalOpen }
        style={ customStyles }
        contentElement={ undefined }
        shouldCloseOnOverlayClick={ true }
      >
        <EditContact contact={ contact } close={ closeEditModal }></EditContact>
      </Modal>

      <div>
        <h3>{ contact.firstName } { contact.lastName }</h3>
        <div className="phone"><AiFillPhone/>{ contact.phone }</div>
      </div>

      <div className="actions">
        <div className="edit" onClick={ openEditModal }><AiOutlineEdit/></div>
        <div className="delete" onClick={ removeContact }><FaRegTrashAlt/></div>
      </div>
    </div>
  );
}
