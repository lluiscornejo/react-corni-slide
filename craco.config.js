const path = require('path');

// Constant with our paths
const paths = {
  ROOT: path.resolve(__dirname),
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

module.exports = {
  webpack: {
    alias: {
      '@Application': path.resolve(__dirname, './src/application/'),
    },
    // configure: (webpackConfig) => {
    //   // eslint-disable-next-line no-param-reassign
    //   webpackConfig.entry = path.join(paths.SRC, 'application/components/slider/index.js');
    //   // eslint-disable-next-line no-param-reassign
    //   webpackConfig.output = {
    //     path: paths.DIST,
    //     filename: 'index.js',
    //     publicPath: '/',
    //     libraryTarget: 'commonjs2',
    //   };
    //   // eslint-disable-next-line no-param-reassign
    //   webpackConfig.externals = {
    //     react: 'react',
    //     'react-dom': 'react-dom',
    //     'styled-components': 'styled-components',
    //   };
    //   console.log(webpackConfig);
    //   return webpackConfig;
    // },
  },
};
