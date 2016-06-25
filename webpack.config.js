const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const addPlugin = (add, plugin) => add ? plugin : undefined;
  const ifProduction = plugin => addPlugin(env.production, plugin);
  const removeEmpty = plugins => plugins.filter(p => !!p);

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
    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      ifProduction(new webpack.optimize.DedupePlugin()),
      ifProduction(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })),
      ifProduction(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })),
      ifProduction(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8 : true,
          warnings: false
        }
      }))
    ]),
    module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: env.test ? 'babel' : 'babel!eslint',
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
