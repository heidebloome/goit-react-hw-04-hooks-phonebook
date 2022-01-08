import React from 'react';

const ContactList = ({ list }) => {
  return list.map(item => <li key={item.id}>{item.name}</li>);
};

export default ContactList;
