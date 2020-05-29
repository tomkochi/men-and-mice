import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/css/bootstrap.css" />
          <link rel="preload" href="/fonts/apercu/apercu bold.otf" as="font" />
          <link rel="preload" href="/fonts/apercu/apercu light.otf" as="font" />
          <link
            rel="preload"
            href="/fonts/apercu/apercu medium.otf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/apercu/apercu regular.otf"
            as="font"
          />

          <link
            rel="preload"
            href="/fonts/capitolium/Capitolium2-Bold.otf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/capitolium/Capitolium2-Regular.otf"
            as="font"
          />

          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
