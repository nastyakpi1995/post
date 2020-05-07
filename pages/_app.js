import React from 'react';
import { Provider } from 'react-redux';

// Components

import Head from 'next/head';
import App from 'next/app';

import createStore from '../redux';

// Utils

import isServer from '../utils/isServer';
import getToken from '../utils/getToken';
import fetch from '../utils/apiCaller';

// Styles

import '../styles/index.scss';

export default class Root extends App {
  constructor(props) {
    super(props);
    this.store = createStore();
  }

  static async getInitialProps() {
    let userData = {};

    if (isServer()) {
      const token = getToken();

      // eslint-disable-next-line no-unused-vars
      let user = {};

      if (token) {
        try {
          user = await fetch('https://jsonplaceholder.typicode.com/users/1');
        } catch (err) {
          return {};
        }

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
    const { Component } = this.props;

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
          <Component {...this.props} />
        </Provider>
      </>
    );
  }
}
