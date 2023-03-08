import Document, { Html, Main, NextScript, Head } from "next/document";
// import styles from "../styles/globals.module.css"
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx?.locale || "fa" };
  }

  render() {

    return (
      <Html
        dir={this.props.locale === "fa" ? "rtl" : "ltr"}
        lang={this.props.locale}
      >
        <Head>
          {/* <link rel="stylesheet" href="/_next/static/styles/globals.css" /> */}
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