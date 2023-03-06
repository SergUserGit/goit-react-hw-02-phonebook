import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.state.contacts.push({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState(prevState => ({ contacts: prevState.contacts }));
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
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
