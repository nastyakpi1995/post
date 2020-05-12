import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'i18n';

// Components

import Head from 'next/head';
import App from 'next/app';

import store from '../redux';

// Styles

import '../styles/index.scss';

class Root extends App {
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
        <Provider store={store}>
          <Component {...this.props} />
        </Provider>
      </>
    );
  }
}

export default appWithTranslation(Root);
