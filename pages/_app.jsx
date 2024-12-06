import Head from 'next/head';
import '../asset/css/globals.css';
import Header from '../src/components/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nielsblaak.nl</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🧑🏻‍💻</text></svg>"
        />
        <meta property="og:title" content="Nielsblaak.nl" key="title" />
      </Head>
      <main className="h-screen md:mx-auto">
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}
