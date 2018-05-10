import React from "react";
import styled from "styled-components";
import App, { Container } from "next/app";

const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column;
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
