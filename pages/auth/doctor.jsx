import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginPage from '../../components/page/LoginPage';

// Actions

import { login, clearLoginError } from '../../redux/actions/authActions';

// ----------------

class LoginDoctorRoute extends Component {
  static routeName = 'Login Doctor';

  static login = false;

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    const { loginAction, clearError } = this.props;
    loginAction(data);
  }

  render() {
    const { authErrors } = this.props;
    return (
      <LoginPage
        authErrors={authErrors}
        type="DOC"
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect((state) => ({ authErrors: state.auth.authErrors }), {
  loginAction: login,
  clearError: clearLoginError,
})(LoginDoctorRoute);
