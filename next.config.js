module.exports = {
  webpack: config => ({
    ...config,
    experiments: {
      topLevelAwait: true,
    },
  }),
};
