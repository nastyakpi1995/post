import React from 'react';

import AuthTemplate from '../view/templates/AuthTemplate';
import LoginForm from '../view/objects/forms/LoginForm';

export default function Login() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}
