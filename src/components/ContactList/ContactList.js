import React from 'react';
import propTypes from 'prop-types';

import { List } from './ContactList.styled';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ list }) => {
  return (
    <List>
      {list.map(item => (
        <ContactItem key={item.id} name={item.name} number={item.number} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  list: propTypes.arrayOf(propTypes.object),
};

export default ContactList;
