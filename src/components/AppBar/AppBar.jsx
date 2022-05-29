import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import {Header} from './AppBar.styles'
import {authSelectors} from '../../redux/auth'

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  
  return (
    <Header>
      <Navigation/>
      {isLoggedIn ? <UserMenu/> : <AuthNav/>}
     
    </Header>
  )
}

export default AppBar       