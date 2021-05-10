import { FC, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; padding: 0; }
`;

const theme = {
  colors: {
    black: '#00',
    white: '#fff',
  },
};


// TODO: make retheming functional
const Provider: FC = ({ children }) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      <GlobalStyles />
    </Fragment>
  );
};

export default Provider;
