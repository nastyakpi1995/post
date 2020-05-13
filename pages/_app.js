import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'i18n';

// Components

import Head from 'next/head';
import App from 'next/app';

import createStore from '../redux';

// Utils

import isServer from '../utils/isServer';
import getToken from '../utils/getToken';

// Styles

import 'react-phone-input-2/lib/material.css';
import '../styles/index.scss';

class Root extends App {
  constructor(props) {
    super(props);
    this.store = createStore();
  }

  static async getInitialProps() {
    let userData = {};

    if (isServer()) {
      const token = getToken();

      // eslint-disable-next-line no-unused-vars
      const user = {};

      if (token) {
        userData = { ...userData, ...user };
      }
    } else {
      userData = this.store.getState();
    }
    return {
      ...(isServer() ? { preloadedState: { user: userData } } : {}),
    };
  }

  render() {
    const { Component: C } = this.props;
    const Component = appWithTranslation(C);

    return (
      <>
        <Head>
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            name="viewport"
          />
          <title>Title</title>
        </Head>

        <Provider store={this.store}>
          <div id="modal-root" />
          <Component {...this.props} />
        </Provider>
      </>
    );
  }
}

export default Root;
