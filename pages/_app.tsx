import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import { Global } from "@emotion/core";
import { reset } from "../src/css/reset";

class InputApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>bemba</title>
        </Head>
        <Global styles={reset} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default InputApp;
