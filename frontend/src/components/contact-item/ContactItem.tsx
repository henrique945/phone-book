//#region Imports

import { AiFillPhone } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import './ContactItem.css';
import { ContactInterface } from '../../models/contact.interface.ts';

//#endregion

export default function ContactItem(contact: ContactInterface) {
  return (
    <div className="contact">
      <h3>{ contact.firstName } { contact.lastName }</h3>
      <div className="phone"><AiFillPhone/>{ contact.phone }</div>
      <div className="trash"><FaRegTrashAlt/></div>
    </div>
  );
}
