import React from 'react';

import AuthTemplate from '../view/templates/AuthTemplate';
import LoginForm from '../view/objects/forms/LoginForm';
import Aside from '../view/objects/auth/Aside';

export default function LoginPage({ onSubmit, type, authErrors }) {
  return (
    <AuthTemplate type={type} aside={<Aside type={type} />}>
      <LoginForm authErrors={authErrors} type={type} onSubmit={onSubmit} />
    </AuthTemplate>
  );
}
