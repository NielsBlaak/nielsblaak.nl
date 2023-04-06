import '../asset/css/globals.css';
import Header from '../src/components/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-auto max-w-screen-lg">
        <Component {...pageProps} />
      </main>
    </>
  )
}
