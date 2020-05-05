import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux';
import Step1 from '../components/Patient/Registration/Step1/Step1';
// import Step2 from '../components/Patient/Registration/Step2/Step2';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="container">
        <Head>
          <title>WooDoc</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="mainContainer">
          <Step1 />
          {/* <Step2 /> */}
        </div>
      </div>
    </Provider>
  );
}
