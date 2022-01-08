import React, { Component, Fragment } from 'react';
import shortid from 'shortid';

import { Title } from './components/Title/Title.styled';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

const INITIAL_STATE = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [...INITIAL_STATE],
    filter: '',
  };

  formSubmitHandler = (name, number) => {
    this.setState(prevState => {
      const idNum = shortid.generate();
      return { contacts: [...prevState.contacts, { name, number, id: idNum }] };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  filterList = () => {
    const fff = this.state.filter.toLowerCase();
    const newArr = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(fff);
    });
    return newArr;
  };

  render() {
    return (
      <Fragment>
        <Title>Phonebook</Title>
        <Form onSubmit={this.formSubmitHandler} />
        <Title mt={7}>Contacts</Title>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList list={this.filterList()} />
      </Fragment>
    );
  }
}

export default App;
