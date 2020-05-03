import Head from 'next/head';
import Registration from '../components/Patient/PatientRegistration/registration';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WooDoc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mainContainer">
        <Registration />
      </div>
    </div>
  );
}
