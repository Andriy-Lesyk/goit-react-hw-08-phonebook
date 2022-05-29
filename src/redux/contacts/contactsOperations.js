import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const isLogged = state.auth.isLoggedIn
    if(isLogged===false){
      return
    }
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return error;
    }
  }
);
