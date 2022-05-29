import React, { useState } from 'react';
import { LoginForm } from './LoginViews.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

function LoginViews() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };
  return (
    <div>
      <h1>Страница логина</h1>

      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <label>
          Почта
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <label>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button style={{ width: '200px' }} type="submit">
          Войти
        </button>
      </LoginForm>
    </div>
  );
}

export default LoginViews;
