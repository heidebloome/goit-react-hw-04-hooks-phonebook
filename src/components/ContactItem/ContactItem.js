import React from 'react';
import propTypes from 'prop-types';

import { Button } from '../common';
import { Item, Wrapper, Text } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onContactDelete }) => {
  return (
    <Item>
      <Wrapper>
        <Text fwb>{name}</Text>
        <Text>{number}</Text>
      </Wrapper>
      <Button onClick={() => onContactDelete(id, name)}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  onContactDelete: propTypes.func.isRequired,
};

export default ContactItem;
