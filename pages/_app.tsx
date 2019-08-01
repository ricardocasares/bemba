import React from "react";
import withSagas from "next-redux-saga";
import withRedux from "next-redux-wrapper";
import { Store } from "redux";
import { Provider } from "react-redux";
import { Global } from "@emotion/core";
import App, { Container, AppContext } from "next/app";
import Head from "next/head";
import { reset } from "@/css/reset";
import { configureStore } from "@/store";
import { State } from "@/store/state";

type BembaProps = { store: Store<State> };

class BembaApp extends App<BembaProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
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
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

const withStore = withRedux(configureStore);

export default withStore(withSagas(BembaApp));
