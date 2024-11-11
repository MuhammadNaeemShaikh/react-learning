import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <div style={{ padding: '20px 20px', textAlign: 'center' }}>
        Contact List
        <Link to={'/add'}>
          <button
            style={{
              marginLeft: '10px',
              padding: '10px 20px',
              backgroundColor: 'blue',
              color: '#fff',
              font: '1rem',
            }}
          >
            Add Contact
          </button>
        </Link>
      </div>
      <table>
        {contacts.map((contact) => (
          <ContactCard contact={contact} />
        ))}
      </table>
    </div>
  );
};

export default ContactList;
