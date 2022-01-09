import React from 'react';
import propTypes from 'prop-types';

const ContactItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

export default ContactItem;
