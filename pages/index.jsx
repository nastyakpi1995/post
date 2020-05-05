import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux';
import Registration from '../components/Patient/Registration';

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
