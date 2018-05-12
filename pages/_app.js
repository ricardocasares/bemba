import React from "react";
import App, { Container } from "next/app";
import Router from "next/router";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import withRedux from "next-redux-wrapper";
// utils
import configureProgressBar from "../lib/utils/routing";
// store
import makeStore from "../store";
// components
import Layout from "../components/Layout";

export default withRedux(makeStore)(
  class extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

      return { pageProps };
    }

    componentDidMount() {
      configureProgressBar();
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
