// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          <title>{`Tyler's Portfolio`}</title>
          <link rel="icon" href="/images/cuteFrog.png" />
          <meta name="description" content="Tyler Beach Portfolio" />
          <meta name="keywords" content="tyler,tyler beach,developer,software engineer,portfolio,portfolio website" />
          <meta name="author" content="Tyler Beach" />

          <meta property="og:title" content="Tyler Beach Portfolio" />
          <meta property="og:description" content="Check out the portfolio of Tyler Beach, a software engineer." />
          <meta property="og:image" content="/images/cuteFrog.png" />
          <meta property="og:url" content="https://tylerbeach.site" />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Tyler Beach Portfolio" />
          <meta name="twitter:description" content="Check out the portfolio of Tyler Beach, a software engineer." />
          <meta name="twitter:image" content="/images/cuteFrog.png" />

          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://tylerbeach.site" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
