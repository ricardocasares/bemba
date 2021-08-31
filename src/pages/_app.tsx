import { useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { Providers } from "@/lib/providers";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Scrollable } from "@/components/Scrollable";
import { Player } from "@/components/Player";
import { globalStyles } from "@/css/global";
import { pageview } from "@/lib/utils";
import seoProps from "@/config/seo";


export function BembaApp({ Component, pageProps }: AppProps) {
  globalStyles();

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

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
