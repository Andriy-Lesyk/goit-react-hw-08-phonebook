import React from 'react'
import { Outlet } from 'react-router-dom';
import Form from '../../components/Forms/Forms';
import Filter from '../../components/Filter/Filter';
import Contact from '../../components/Contacts/Contacts';

function HomeViews() {
  return (
    <div>
        <Outlet/>
        <h1>Phonebook</h1>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <Contact />
    </div>
  )
}

export default HomeViews