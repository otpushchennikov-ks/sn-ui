import 'antd/dist/antd.css';
import StylesProvider from '../src/@providers/StylesProvider';
import ApolloProvider from '../src/@providers/ApolloProvider';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'twitter',
        value: '#00aced',
      },
      {
        name: 'facebook',
        value: '#3b5998',
      },
    ],
  },
};

export const decorators = [
  Story => (
    <ApolloProvider>
      <Story />
    </ApolloProvider>
  ),
  Story => (
    <StylesProvider>
      <Story />
    </StylesProvider>
  ),
];
