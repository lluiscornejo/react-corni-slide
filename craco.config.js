const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@Application': path.resolve(__dirname, './src/application/'),
      '@Common': path.resolve(__dirname, './src/common/'),
      '@Config': path.resolve(__dirname, './src/application/config/'),
    },
  },
};
