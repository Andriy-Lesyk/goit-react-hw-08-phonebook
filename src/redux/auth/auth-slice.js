import { createSlice } from '@reduxjs/toolkit';
import authOperation from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperation.register.pending](state, action) {
      state.isLoading = true;
    },
    [authOperation.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperation.register.rejected](state, action) {
      state.isLoading = false;
    },
    [authOperation.logIn.pending](state, action) {
      state.isLoading = true;
    },
    [authOperation.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperation.logIn.rejected](state, action) {
      state.isLoading = false;
    },
    [authOperation.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperation.fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
      
    },
    [authOperation.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
     
    },
    [authOperation.fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
      
    },
  },
});

export default authSlice.reducer;
