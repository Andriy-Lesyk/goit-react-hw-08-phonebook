import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue, fulfillWithValue }) => { 
    try {
      const contacts = await axios.get('/contacts')
      if (!contacts.ok) {
        return rejectWithValue(contacts.status);
      }
      return fulfillWithValue(contacts);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);


export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue, fulfillWithValue }) => {
    try {
      const contacts = await axios.post('/contacts', contact)
      if (!contacts.ok) {
        return rejectWithValue(contacts.status);
      } 
      return fulfillWithValue(contacts);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);


export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue, fulfillWithValue }) => {
    try {
      const contacts = await axios.delete('/contacts/'`${id}`)
      if (!contacts.ok) {
        return rejectWithValue(contacts.status);
      }
      return fulfillWithValue(contacts);
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);




