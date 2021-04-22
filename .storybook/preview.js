import DictsContext from '../src/@context/DictsContext';


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
    <DictsContext.Provider value={{
      district: [
        { name: 'ЗелАО' },
        { name: 'ТАО' },
      ],
    }}>
      <Story />
    </DictsContext.Provider>
  ),
];
