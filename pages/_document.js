import DeferNextScript from "../utils/lib/deferNextScript";
import Document, { Html, Head, Main } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <DeferNextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
