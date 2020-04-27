import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/css/bootstrap.css" />

          <link
            rel="preload"
            href="/fonts/apercu/{Colophon} Aperçu Bold Typeface.otf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/apercu/{Colophon} Aperçu Light Typeface.otf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/apercu/{Colophon} Aperçu Medium Typeface.otf"
            as="font"
          />
          <link
            rel="preload"
            href="/fonts/apercu/{Colophon} Aperçu Regular Typeface.otf"
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
            crossOrigin=""
          />

          <script
            src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
            integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
            integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
            crossorigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
