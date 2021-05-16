module.exports = () => {
  return {
    future: { webpack5: true },
    webpack: config => ({
      ...config,
      experiments: { topLevelAwait: true },
    }),
  };
};
