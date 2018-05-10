import React from "react";
import styled from "styled-components";
import App, { Container } from "next/app";
import makeStore from "../store";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

export default withRedux(makeStore)(
  class extends App {
    static async getInitialProps({ Component, ctx }) {
      console.log(ctx.store.getState());
      const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

      return { pageProps };
    }

    render() {
      const { Component, pageProps, store } = this.props;

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

const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;
