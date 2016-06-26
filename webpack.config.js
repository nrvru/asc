const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const ifProduction = (a, b) => {
    if (env.production) {
      return a;
    }
    return b;
  };
  const ifDevelopment = (a, b) => {
    if (env.development) {
      return a;
    }
    return b;
  };
  const removeEmpty = items => items.filter(i => !!i);

  return {
    context: resolve(__dirname, 'src'),
    entry: removeEmpty([
      ifDevelopment('webpack-dev-server/client?http://localhost:8080/'),
      ifDevelopment('webpack/hot/dev-server'),
      './index.js',
    ]),
    output: {
      filename: ifProduction('bundle.[chunkhash].js', 'bundle.js'),
      path: resolve(__dirname, 'build'),
    },
    resolve: {
      modules: [
        resolve(__dirname, 'src'),
        'node_modules',
      ],
    },
    devtool: env.production ? 'source-map' : 'eval',
    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
      ifProduction(new webpack.optimize.DedupePlugin()),
      ifProduction(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      })),
      ifProduction(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"',
        },
      })),
      ifProduction(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false,
        },
      })),
    ]),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: 'babel',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loader: 'style!css',
        },
        {
          test: /\.less$/,
          loader: 'style!css!less',
        },
        {
          test: /\.jpe?g$/i,
          loader: 'url-loader?limit=10000&minetype=image/jpg',
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file',
        },
        {
          test: /\.(woff|woff2)$/,
          loader: 'url?prefix=font/&limit=5000',
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=application/octet-stream',
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url?limit=10000&mimetype=image/svg+xml',
        },
      ],
    },
  };
};
