
import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';


export default class CustomDocument extends Document {
  static async getInitialProps(context: DocumentContext) {

    const stylesheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      context.renderPage = () => {
        return originalRenderPage({
          enhanceApp: App => props =>
          stylesheet.collectStyles(<App {...props} />),
        });
      };

      const initialProps = await Document.getInitialProps(context);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {stylesheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      stylesheet.seal();
    }
  }
}
