import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Link } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      {isLoggedIn && (
        <nav>
          <Link to="/contacts">Контакты</Link>
        </nav>
      )}
    </div>
  );
}

export default Navigation;
