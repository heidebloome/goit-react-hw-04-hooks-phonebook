import React from 'react';

const ContactList = ({ list }) => {
  return list.map(item => (
    <li key={item.id}>
      {item.name}: {item.number}
    </li>
  ));
};

export default ContactList;
