// Workaround for babel import aliases
// eslint-disable-next-line no-undef
System.config({
  paths: {
    '@Application/*': './src/application/*',
    '@Common/*': './src/common/*',
    '@Config/*': './src/application/config/*',
  },
});
