import Document, { Head, Html, Main, NextScript } from 'next/document'
// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // font-family: 'Manrope', sans-serif;
  // font-family: 'Montserrat', sans-serif;
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="myportal" />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
