import React from 'react';
import {Link} from './AuthNav.styled'

function AuthNav() {
  return (
    <div>
      <nav>
        <Link to="/register">Регистрация</Link>
        <Link to="/login">Логин</Link>
      </nav>
    </div>
  );
}

export default AuthNav;
