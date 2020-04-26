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

          <style jsx global>{`
            @font-face {
              font-family: "Apercu Regular";
              src: url("/fonts/apercu/{Colophon} Aperçu Regular Typeface.otf");
            }
            @font-face {
              font-family: "Apercu Medium";
              src: url("/fonts/apercu/{Colophon} Aperçu Medium Typeface.otf");
            }
            @font-face {
              font-family: "Apercu Bold";
              src: url("/fonts/apercu/{Colophon} Aperçu Bold Typeface.otf");
            }
            @font-face {
              font-family: "Capitolium Regular";
              src: url("/fonts/capitolium/Capitolium2-Regular.otf");
            }
            @font-face {
              font-family: "Capitolium Bold";
              src: url("/fonts/capitolium/Capitolium2-Bold.otf");
            }
            html,
            body {
              background: #221f20;
              padding: 0;
              margin: 0;
              width: 100vw;
              overflow-x: hidden;
            }
            textarea:hover,
            input:hover,
            textarea:active,
            input:active,
            textarea:focus,
            input:focus,
            button:focus,
            button:active,
            button:hover,
            label:focus,
            .btn:active,
            .btn.active {
              outline: 0px !important;
              -webkit-appearance: none;
              box-shadow: none !important;
            }
            .f-ap-r {
              font-family: "Apercu Regular";
            }
            .f-ap-m {
              font-family: "Apercu Medium";
            }
            .f-ap-b {
              font-family: "Apercu Bold";
            }
            .f-cap-r {
              font-family: "Capitolium Regular";
            }
            .f-cap-b {
              font-family: "Capitolium Bold";
            }
            .home {
              width: calc(100vw - 100px);
              max-width: 1300px;
              margin: 0 auto;
            }
            @media (max-width: 768px) {
              .home {
                max-width: calc(100vw - 55px);
              }
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
