import React, { Component } from 'react';
import { FormEl, Button } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameChangeHandler = event => {
    const option = event.target.name;
    this.setState({ [option]: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <FormEl onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.nameChangeHandler}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.nameChangeHandler}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </FormEl>
    );
  }
}

export default Form;
