const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const packageConfig = require('./package.json');

// Constant with our paths
const paths = {
  ROOT: path.resolve(__dirname),
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
};

// Environment
const developmentMode = process.env.NODE_ENV === 'development';
const showGraph = process.env.SHOW_GRAPH;

const processEnvPlugin = new webpack.DefinePlugin({
  'process.env': {
    VERSION: JSON.stringify(packageConfig.version),
  },
});

module.exports = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'index.js',
    publicPath: '/',
    globalObject: 'this',
    library: {
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: './ui-components/images/[name]-[hash].[ext]',
        },
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/inline',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: './ui-components/[name]-[hash].[ext]',
        },
      },
      {
        test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: './ui-components/[name]-[hash].[ext]',
        },
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          '@svgr/webpack',
          'url-loader?name=./ui-components/[name]-[hash].[ext]&limit=10000&mimetype=image/svg+xml',
        ],
      },
    ],
  },
  devtool: developmentMode && 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // JS alias
      '@Base': path.resolve(__dirname, './src/'),
      '@Application': path.resolve(__dirname, './src/application/'),
      '@Common': path.resolve(__dirname, './src/common/'),
      '@Config': path.resolve(__dirname, './src/application/config/'),
      '@Styles': path.resolve(__dirname, './src/common/styles/'),
      '@Helpers': path.resolve(__dirname, './src/helpers/'),
    },
  },
  plugins: [processEnvPlugin],
  devServer: {
    writeToDisk: true,
  },
  optimization: {
    minimize: !developmentMode,
    minimizer: [
      new TerserPlugin({
        // sourceMap: developmentMode,
        // cache: true,
        parallel: true,
        terserOptions: {
          ie8: false,
          compress: !developmentMode,
          ecma: 6,
          mangle: true,
        },
      }),
    ],
  },
  mode: process.env.NODE_ENV,
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'react-dom',
    },
  },
};

if (showGraph) {
  module.exports.plugins.push(new BundleAnalyzerPlugin());
}
