//#region Imports

import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiPlusMedical, BiSolidContact } from 'react-icons/bi';
import ContactItem from '../components/contact-item/ContactItem.tsx';
import { ContactInterface } from '../models/contact.interface.ts';
import './Home.css';

//#endregion

export default function Home() {
  const [listContacts, setListContacts] = useState<ContactInterface[]>([
    {
      id: 1,
      firstName: 'Eric',
      lastName: 'Elliot',
      phone: '222-555-6575',
    },
    {
      id: 2,
      firstName: 'Steve',
      lastName: 'Jobs',
      phone: '222-454-6754',
    },
    {
      id: 3,
      firstName: 'Fred',
      lastName: 'Allen',
      phone: '210-657-9886',
    },
    {
      id: 4,
      firstName: 'Steve',
      lastName: 'Wozniak',
      phone: '343-675-8786',
    },
  ]);

  return (
    <div className="home">
      <h1><BiSolidContact/> Phone Book App</h1>

      <div className="header">
        <strong>Contacts</strong>
        <button><BiPlusMedical/> Add Contact</button>
      </div>

      <div className="search">
        <AiOutlineSearch/>
        <input type="text" placeholder="Search for contact by last name..."/>
      </div>

      <div className="list">
        {
          listContacts.map(contact => (
            <div className="contact-item">
              <ContactItem
                key={ contact.id }
                id={ contact.id }
                firstName={ contact.firstName }
                lastName={ contact.lastName }
                phone={ contact.phone }
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}
