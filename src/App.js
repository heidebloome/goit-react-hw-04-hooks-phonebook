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
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`${name} is already in contacts!`);
      return;
    }

    setContacts(prevState => {
      const id = shortid.generate();
      return [...prevState, { id, name, number }];
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

// class App extends Component {
//   state = {
//     contacts: [...INITIAL_STATE],
//     filter: '',
//   };

//   componentDidUpdate() {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   }

//   componentDidMount() {
//     const data = JSON.parse(localStorage.getItem('contacts'));

//     if (data) {
//       this.setState({ contacts: data });
//     }
//   }

//   formSubmitHandler = (name, number) => {
//     const { contacts } = this.state;

//     if (
//       contacts.some(
//         contact => contact.name.toLowerCase() === name.toLowerCase(),
//       )
//     ) {
//       toast.error(`${name} is already in contacts!`);
//       return;
//     }

//     this.setState(prevState => {
//       const id = shortid.generate();
//       return { contacts: [...prevState.contacts, { id, name, number }] };
//     });

//     toast.success(`${name} was added to your contacts!`);
//   };

//   filterChangeHandler = e => {
//     this.setState({ filter: e.target.value });
//   };

//   visibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//   };

//   contactDeleteHandler = (id, name) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));

//     toast.error(`${name} was deleted from your contacts!`);
//   };

//   render() {
//     const { filter } = this.state;

//     return (
//       <>
//         <Title>Phonebook</Title>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <Title mt={7}>Contacts</Title>
//         <Filter value={filter} onChange={this.filterChangeHandler} />
//         <ContactList
//           list={this.visibleContacts()}
//           onContactDelete={this.contactDeleteHandler}
//         />
//         <Toaster />
//       </>
//     );
//   }
// }
