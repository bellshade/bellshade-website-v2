import DeferNextScript from "../utils/lib/deferNextScript";
import Document, { Html, Head, Main } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:url" content="https://bellshade.github.io/" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Bellshade - Learn with Our Community"
          />
          <meta
            property="og:description"
            content="Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia"
          />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/reacto11mecha/bellshade.github.io/gh-pages/og_img.png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />

          <meta
            name="description"
            content="Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia"
          />
          <meta property="og:locale" content="id_ID" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Bellshade - Learn with Our Community"
          />
          <meta
            property="og:description"
            content="Komunitas untuk mengelola dan menulis kode untuk proyek pendidikan sumber terbuka Indonesia"
          />
          <meta
            property="og:image"
            content="https://cdn.statically.io/img/media.discordapp.net/w=800/attachments/891222600422936616/892682527720996884/unknown.png"
          />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="856" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <DeferNextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
