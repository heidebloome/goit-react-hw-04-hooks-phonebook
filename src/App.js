import React, { Component, Fragment } from 'react';
import shortid from 'shortid';

import Section from './components/Section/Section';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = value => {
    this.setState(prevState => {
      const idNum = shortid.generate();
      return { contacts: [...prevState.contacts, { name: value, id: idNum }] };
    });
  };

  render() {
    return (
      <Fragment>
        <Section text="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section text="Contacts">
          <ContactList list={this.state.contacts} />
        </Section>
      </Fragment>
    );
  }
}

export default App;
