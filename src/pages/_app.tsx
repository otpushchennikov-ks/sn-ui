import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import ApolloProvider from '@providers/ApolloProvider';
import StylesProvider from '@providers/StylesProvider';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <StylesProvider>
        <Component {...pageProps} />
      </StylesProvider>      
    </ApolloProvider>
  );
}
