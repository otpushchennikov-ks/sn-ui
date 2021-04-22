import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    black: '#000',
    white: '#fff',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
