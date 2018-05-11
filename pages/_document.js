import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import "./_reset";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    let sheet = new ServerStyleSheet();
    let page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    let styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Radio Bemba</title>
          <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#222" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
