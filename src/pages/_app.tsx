import { Global } from "@emotion/core";
import { styles } from "@/css/global";
import { Layout } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Scrollable } from "@/components/Scrollable";
import { Player } from "@/components/Player";
import { AppProps } from "next/app";
import { PlayerProvider } from "@/lib/context/player";

export function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerProvider>
      <Global styles={styles} />
      <Layout>
        <Header />
        <Scrollable>
          <Component {...pageProps} />
        </Scrollable>
        <Player />
      </Layout>
    </PlayerProvider>
  );
}

export default App;
