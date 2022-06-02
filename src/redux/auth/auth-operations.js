import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  '/register',
  async credentials => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      
      token.set(data.token);
      return (data);
    } catch (error) {
      return alert('Sorry sign up is failed');
      
    }
  }
);

const logIn = createAsyncThunk(
  '/login',
  async credentials => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return (data);
    } catch (error) {
      return alert('Sorry sign in is failed');
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return alert('Повторіть спробу');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return alert('Ups');
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
