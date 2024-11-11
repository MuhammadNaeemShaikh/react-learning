import React from 'react';

const ContactCard = ({ contact }) => {
  const { id, name, email } = contact;
  return (
    <div
      key={id}
      style={{
        padding: '20px 20px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
      }}
    >
      <div>Name : {name}</div>
      <div>Email: {email}</div>
    </div>
  );
};

export default ContactCard;
