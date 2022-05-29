import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import RegisterViews from '../views/RegisterViews/RegisterViews';
import LoginViews from '../views/LoginViews/LoginViews';
import HomeViews from '../views/HomeViews/HomeViews';
import { NotFoundViews } from '../views/NotFoundVievs/NotFoundViews';
import { authOperations } from '../redux/auth';

export default function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
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
