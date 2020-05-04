import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux';
import Registration from '../components/Patient/Registration/Step1/Step1';
// import '../styles/reset.scss';

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
