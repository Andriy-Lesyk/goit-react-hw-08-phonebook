import React from 'react';
import { Link } from './Navigation.styled';

function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/">
          Главная
        </Link>
        <Link to="/contacts">
          Контакты
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
