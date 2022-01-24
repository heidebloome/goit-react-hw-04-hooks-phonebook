import { useState } from 'react';
import propTypes from 'prop-types';

import { Button, Label, Input } from '../common';
import { Form } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const stateChangeHandler = e => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : setNumber(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetState();
  };

  const resetState = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={stateChangeHandler}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={stateChangeHandler}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
