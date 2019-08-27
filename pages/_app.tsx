import React from 'react';
import withSagas from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import App, { Container, AppContext } from 'next/app';
import Head from 'next/head';
import { reset } from '@/css/reset';
import { theme } from '@/css/theme';
import { configureStore } from '@/store';
import { BembaStore } from '@/models/state';
import { clientReady, serverReady } from '@/features/shared/app/store';
import { Layout } from '@/components/Layout';
import { Box } from '@/components/Box';
import { Player } from '@/components/Player';
import { Bar } from '@/components/Bar';

type BembaProps = { store: BembaStore };

class BembaApp extends App<BembaProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (ctx.req) {
      await ctx.store.dispatch(serverReady(ctx));
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    const { store } = this.props;
    store.dispatch(clientReady());
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Head>
          <title>bemba</title>
        </Head>
        <Global styles={reset} />
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Box fullh>
                <Component {...pageProps} />
              </Box>
              <Player />
              <Bar />
            </Layout>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

const withStore = withRedux(configureStore);

export default withStore(withSagas(BembaApp));
