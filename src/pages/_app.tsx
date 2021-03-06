import '@styled/global.css';
import 'normalize.css';
import 'antd/dist/antd.css';
import '@styled/vars.css';
import { AppProps } from 'next/app';
import StylesProvider from '@providers/StylesProvider';
import apolloClient from '@lib/apolloClient';
import { ApolloProvider } from '@apollo/client';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <StylesProvider>
        <Component {...pageProps} />
      </StylesProvider>      
    </ApolloProvider>
  );
}
