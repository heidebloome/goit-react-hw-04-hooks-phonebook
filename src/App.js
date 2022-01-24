import { useEffect, useState } from 'react';
import shortid from 'shortid';
import toast, { Toaster } from 'react-hot-toast';

import INITIAL_STATE from './data/initial-state.json';
import { Title } from './components/Title/Title.styled';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? INITIAL_STATE;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (name, number) => {
    const normalizedName = name.toLowerCase();
    const savedName = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName,
    );
    if (savedName) {
      toast.error(`${name} is already in contacts!`);
      return;
    }

    setContacts(state => {
      const id = shortid.generate();
      return [...state, { id, name, number }];
    });

    toast.success(`${name} was added to your contacts!`);
  };

  const filterChangeHandler = e => {
    setFilter(e.target.value);
  };

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const contactDeleteHandler = (id, name) => {
    setContacts(state => state.filter(contact => contact.id !== id));
    toast.error(`${name} was deleted from your contacts!`);
  };

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={formSubmitHandler} />
      <Title mt={7}>Contacts</Title>
      <Filter value={filter} onChange={filterChangeHandler} />
      <ContactList
        list={visibleContacts()}
        onContactDelete={contactDeleteHandler}
      />
      <Toaster />
    </>
  );
}
