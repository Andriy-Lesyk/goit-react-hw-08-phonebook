import React from 'react';
import Form from './Forms/Forms';
import Filter from './Filter/Filter';
import Contact from './Contacts/Contacts';

export default function App() {
   function a(x,y){
    x=3
    y=5 
    let c=x+y
    console.log(c)

}
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
