import Head from 'next/head';

import HomePage from './home/index.page';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-proxima-nova/style.css';
/**
 *
 * @returns Landing page
 */
export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Redux Bolier Plate</title>
      </Head>
      <HomePage />
    </>
  );
}
