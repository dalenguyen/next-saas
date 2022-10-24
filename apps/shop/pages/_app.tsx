import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import UserProvider from './../context/user'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to shop!</title>
      </Head>
      <main className="app">
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </main>
    </>
  );
}

export default CustomApp;
