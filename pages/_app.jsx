import "../asset/css/globals.css";
import Header from "../src/components/Header";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="md:mx-auto">
        <Component {...pageProps} />
      </main>
    </>
  );
}
