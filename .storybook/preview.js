import DictsContext from '../src/@context/DictsContext';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
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
