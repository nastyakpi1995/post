import React from 'react';

import LoginPage from '../../components/page/LoginPage';

// ----------------

export default class Login extends React.Component {
  static routeName = 'Login'; // System name of route

  static login = false;

  render() {
    return <LoginPage />;
  }
}
