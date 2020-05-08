import React from 'react';
import Head from 'next/head';
import { FaBeer } from 'react-icons/fa';
import { Provider } from 'react-redux';
import store from '../redux';
import Registration from '../components/Patient/Registration';
import Input from '../components/view/ui/Input';
import FieldLabel from '../components/view/ui/FieldLabel';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="container">
        <Head>
          <title>WooDoc</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mainContainer" style={{ margin: '30px' }}>
          <FieldLabel text="Label text">
            <Input />
          </FieldLabel>
          {/* <Registration /> */}
        </div>
      </div>
    </Provider>
  );
}
