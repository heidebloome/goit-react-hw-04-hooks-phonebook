import React from 'react';
import propTypes from 'prop-types';

import { Label, Input } from '../common';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
};

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
