import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider, useUser } from './UserContext';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import './index.css';

function Root() {
  const user = useUser();
  return user ? <MainPage /> : <LoginPage />;
}

ReactDOM.render(
  <UserProvider>
    <Root />
  </UserProvider>,
  document.querySelector('#root')
);