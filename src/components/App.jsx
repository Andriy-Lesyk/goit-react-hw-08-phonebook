import React from 'react';
import Form from './Forms/Forms';
import Filter from './Filter/Filter';
import Contact from './Contacts/Contacts';

export default function App() {
 
  console.log(arguments)
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <Contact />
    </div>
  );
}
