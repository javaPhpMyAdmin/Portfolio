import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className='bg-fixed dark:text-white dark:from-dark-500 dark:to-dark-700 `{/*bg-gradient-to-r from-green to-blue-500*/}`'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument