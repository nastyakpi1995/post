import React from 'react';
import Head from 'next/head';
import { FaBeer } from 'react-icons/fa';
import { Provider } from 'react-redux';
import store from '../redux';
import Registration from '../components/Patient/Registration';
import Input from '../components/view/ui/Input';
import FieldLabel from '../components/view/ui/FieldLabel';
import Checkbox from '../components/view/ui/Checkbox';
import SelectComponent from '../components/view/ui/Select';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="container">
        <Head>
          <title>WooDoc</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mainContainer">
          <Registration />
        </div>
      </div>
    </Provider>
  );
}
