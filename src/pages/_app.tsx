import { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { GlobalStyle } from "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My World in 50mm</title>
        <link rel="shortcut icon" href="camera.svg" type="image/png" />
      </Head>

      <GlobalStyle />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
