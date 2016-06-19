const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    context: resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
      filename: 'bundle.[chunkhash].js',
      path: resolve(__dirname, 'dist')
    },
    resolve: {
      modules: [
        resolve(__dirname, 'src'),
        'node_modules'
      ]
    },
    devtool: env.production ? 'source-map' : 'eval',
    plugins: [new HtmlWebpackPlugin({
      template: './index.html'
    })],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: 'babel!eslint',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        }
      ]
    }
  };
};
