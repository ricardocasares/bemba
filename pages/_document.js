import "../lib/reset";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

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
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#222" />
          <meta
            name="google-site-verification"
            content="oDrI2nIuNzWJUxr9GOW2DmfSpkMAlLdBrpNvBdUufAc"
          />
          <link rel="manifest" href="/static/manifest/manifest.json" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-214398-13');`
            }}
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-214398-13"
          />
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
