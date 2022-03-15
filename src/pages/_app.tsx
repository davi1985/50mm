import { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";

import NextNProgress from "nextjs-progressbar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My World in 50mm</title>
        <link rel="shortcut icon" href="camera.svg" type="image/png" />
      </Head>

      <GlobalStyle />

      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={1000}
        height={3}
        showOnShallow={true}
      />

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
