import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { Providers } from "@/lib/providers";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Scrollable } from "@/components/Scrollable";
import { Player } from "@/components/Player";
import seoProps from "@/config/seo";
import { globalStyles } from "@/css/global";

export function BembaApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <Providers>
      <Layout>
        <Header />
        <Scrollable>
          <DefaultSeo {...seoProps} />
          <Component {...pageProps} />
        </Scrollable>
        <Player />
      </Layout>
    </Providers>
  );
}

export default BembaApp;
