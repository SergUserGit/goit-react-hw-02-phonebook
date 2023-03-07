import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  contactsFilter = [];

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.contactsFilter.splice(0, this.contactsFilter.length);

    const findElem = this.state.contacts.filter(
      contact => contact.name.toUpperCase() === this.state.name.toUpperCase()
    );

    if (findElem.length > 0) {
      alert(this.state.name + ' is already in contacts.');
      return;
    }

    this.state.contacts.push({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState(prevState => ({ contacts: prevState.contacts }));
  };

  handleFilterChange = e => {
    this.contactsFilter.splice(0, this.contactsFilter.length);

    const { name, value } = e.target;
    this.setState({ [name]: value });

    const filterArray = this.state.contacts.filter(contact =>
      contact.name.toUpperCase().includes(value.toUpperCase())
    );

    if (filterArray.length > 0) {
      for (const i of filterArray) {
        this.contactsFilter.push(i);
      }
    }
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <h2>Contacts</h2>
        <Filter handleFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={
            this.contactsFilter.length > 0
              ? this.contactsFilter
              : this.state.contacts
          }
        />
      </div>
    );
  }
}

export default App;
