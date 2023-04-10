import Document, { Html, Head, Main, NextScript } from "next/document";
// 設定head
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Nextjs-Sample" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
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
