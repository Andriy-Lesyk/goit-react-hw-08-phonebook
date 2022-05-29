import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSelectors, authOperations } from '../../redux/auth'
import {FaMailchimp} from 'react-icons/fa'
import {Div, Text, Btn} from './UserMenu.styled'

function UserMenu() {
const dispatch = useDispatch();
const name = useSelector(authSelectors.getUsername)

  return (
    <Div>
      <FaMailchimp/>
      <Text> Welcome, {name}</Text>
      <Btn type='button' onClick={()=>dispatch(authOperations.logOut())}>LogOut</Btn>
    </Div>
  )
}

export default UserMenu