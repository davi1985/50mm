import { AppProps } from "next/app";
import Head from "next/head";
import { Header } from "../components/Header";

import { GlobalStyle } from "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My World in 50mm</title>
        <link rel="shortcut icon" href="camera.svg" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyle />

      <Header />
      <Component {...pageProps} />
    </>
  );
}
