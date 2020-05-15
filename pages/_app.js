import React from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'i18n';
import isNil from 'lodash/isNil';
import cookie from 'cookie';
import Cookies from 'js-cookie';

// Components

import Head from 'next/head';
import App from 'next/app';
import apiCaller from '../utils/apiCaller';

import createStore from '../redux';

// Constants

import { redirect as redirectPath } from '../constants/system';

// Global object

import globalObj from '../global';

// Utils

import isServer from '../utils/isServer';
import getToken from '../utils/getToken';
import redirect from '../utils/redirect';

// Styles

import 'react-phone-input-2/lib/material.css';
import '../styles/index.scss';

class Root extends App {
  constructor(props) {
    super(props);
    this.store = createStore();
  }

  static async getInitialProps(ctx) {
    const {
      Component: { routeName, login },
      ctx: { res, req, query, asPath },
    } = ctx;

    let userData = {};

    if (isServer()) {
      if (req.headers.cookie) {
        globalObj.cookie = cookie.parse(req.headers.cookie || '');
      } else {
        globalObj.cookie = {};
      }

      globalObj.res = res;

      const token = getToken();

      // eslint-disable-next-line no-unused-vars
      let user = {};

      if (token) {
        try {
          user = await apiCaller({ url: '/auth/user/' });
        } catch (error) {
          // redirect(redirectPath.NOT_AUTH, true);
          // return {};
        }
        userData = { ...userData, ...user };
      }
    } else {
      userData = createStore().getState();
    }

    // Verify route access

    if (!Root.access(login, routeName)) return {};

    return {
      ...(isServer()
        ? {
            preloadedState: {
              user: userData,
            },
          }
        : {}),
    };
  }

  static access(login, routeName) {
    // Login test

    if (!isNil(login)) {
      const token = getToken();

      if (token) {
        if (login === false) {
          redirect(redirectPath.AUTH);
          return false;
        }
      } else if (login) {
        redirect(redirectPath.NOT_AUTH);
        return false;
      }
    }

    // Hooks

    return true;
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
          <Component {...this.props} />
        </Provider>
      </>
    );
  }
}

export default Root;
