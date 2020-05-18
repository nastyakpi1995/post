import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginPage from '../../components/page/LoginPage';

// Actions

import { login } from '../../redux/actions/authActions';

// ----------------

class LoginRoute extends Component {
  static routeName = 'Login';

  static login = false;

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { loginAction } = this.props;
    loginAction(data);
  }

  render() {
    const { authErrors } = this.props;
    return (
      <LoginPage
        authErrors={authErrors}
        type="CUS"
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect((state) => ({ authErrors: state.auth.authErrors }), {
  loginAction: login,
  // clearError: clearLoginError,
})(LoginRoute);
