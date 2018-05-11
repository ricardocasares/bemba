import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import makeStore from "../store";
import Layout from "../components/Layout";

export default withRedux(makeStore)(
  class extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

      return { pageProps };
    }

    render() {
      let { Component, pageProps, store } = this.props;

      return (
        <Container>
          <Provider store={store}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </Provider>
        </Container>
      );
    }
  }
);
