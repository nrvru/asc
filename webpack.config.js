'use strict';

const {resolve} = require('path');

module.exports = env => {
  return {
    context: resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: resolve(__dirname, 'dist')
    },
    resolve: {
      modules: [
        resolve(__dirname, 'src'),
        'node_modules'
      ]
    },
    devtool: env.production ? 'source-map' : 'eval',
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
  }
};