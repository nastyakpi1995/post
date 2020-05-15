import React, { Component } from 'react';
import { connect } from 'react-redux';

// ----------------

class HomePage extends Component {
  static routeName = 'Login';

  static login = true;

  render() {
    return <div>Home Page</div>;
  }
}

export default HomePage;
