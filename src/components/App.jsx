import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import RegisterViews from '../views/RegisterViews/RegisterViews';
import LoginViews from '../views/LoginViews/LoginViews';
import HomeViews from '../views/HomeViews/HomeViews';
import { NotFoundViews } from '../views/NotFoundVievs/NotFoundViews';

export default function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/"  />
        <Route path="register" element={<RegisterViews />} />
        <Route path="login" element={<LoginViews />} />
        <Route path="contacts" element={<HomeViews />}/>
        <Route path="*" element={<NotFoundViews />} />
      </Routes>
    </div>
  );
}
