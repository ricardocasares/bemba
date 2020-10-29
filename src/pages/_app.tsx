import { AppProps } from "next/app";
import { Global } from "@emotion/core";
import { Providers } from "@/lib/providers";
import { styles } from "@/css/global";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Scrollable } from "@/components/Scrollable";
import { Player } from "@/components/Player";
import Head from "next/head";

export function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Global styles={styles} />
      <Head>
        <title>Radio Bemba</title>
      </Head>
      <Layout>
        <Header />
        <Scrollable>
          <Component {...pageProps} />
        </Scrollable>
        <Player />
      </Layout>
    </Providers>
  );
}

export default App;
