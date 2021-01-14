import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Global } from "@emotion/react";
import { Providers } from "@/lib/providers";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Scrollable } from "@/components/Scrollable";
import { Player } from "@/components/Player";
import { styles } from "@/css/global";
import SEO from "@/config/seo";

export function BembaApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Global styles={styles} />
      <Layout>
        <Header />
        <Scrollable>
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Scrollable>
        <Player />
      </Layout>
    </Providers>
  );
}

export default BembaApp;
