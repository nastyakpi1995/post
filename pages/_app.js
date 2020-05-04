import React from 'react';

// Styles

import '../styles/index.scss';

// Components

import Head from 'next/head';
import App from 'next/app';

export default class Root extends App {
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
        <Component {...this.props} />
      </>
    );
  }
}
