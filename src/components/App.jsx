import React, { Component } from 'react';
import Form from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import styled from 'styled-components'
class App extends Component {
  state = {
     contacts: [
      { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
    ],
    filter: '',
  }
  
  formSubmitHandler = (data) => {
    console.log('data', data)
    this.state.contacts.push(data);
  }

  showValidationMessage = (message) => {
      Notify.warning(message);
  }

   addNewContact = (newContact) => {
    const { contacts } = this.state

    const isExist = Object.keys(newContact).find(key => {
      const subString = newContact[key].toLocaleUpperCase();
      const contact = contacts.find(el => el[key].toLocaleUpperCase().includes(subString));
      if (contact) return !this.showValidationMessage(`${contact[key]} is already in contacts`);
      else return false
    })

    if (isExist) return true;

    newContact.id = nanoid(10)
    this.setState(preState => {
      const contacts = [...preState.contacts, newContact]
      return { contacts }
    })
   }
  
    getFiltredList = () => {
    const { contacts, filter } = this.state

    if (filter) {
      const subString = filter.toLocaleUpperCase();
      const key = isNaN(+filter.charAt(0)) ? 'name' : 'number';
      return contacts.filter(el => el[key].toLocaleUpperCase().includes(subString));
    } else {
      return contacts;
    }
  }

  onFilterChange = (event ) => {
    const { name, value } = event.currentTarget;
    
    this.setState({
      [name]:value
    })
  }

  removeItem = (id) => {
    const { contacts } = this.state;
    const updatedListContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: updatedListContacts
    })
  }
  
  render() {
    const renderList = this.getFiltredList();
        return (
          <Container>
            <h1>Phonebook</h1>
            <Form addNewContact={this.addNewContact} onNotValid={ this.showValidationMessage} />

            <h2>Contacts</h2>
            <Filter  filter ={this.state.filter}onFilterChange={ this.onFilterChange} />
            <ContactsList list={renderList} removeItem={ this.removeItem} />
      </Container>
    );
   }

};

const Container = styled.div`
          height: 100vh;
          fontSize: 40;
          color: '#010101';
          text-align:center;
`

export default App;