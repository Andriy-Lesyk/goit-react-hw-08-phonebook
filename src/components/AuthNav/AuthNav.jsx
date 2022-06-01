import React from 'react';
import { Link, Div } from './AuthNav.styled';

function AuthNav() {
  return (
    <Div>
      <nav>
        <Link to="/register"> Регистрация</Link>
        <Link to="/login"> Логин</Link>
      </nav>
    </Div>
  );
}

export default AuthNav;
