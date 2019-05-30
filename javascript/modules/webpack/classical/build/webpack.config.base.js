var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var basePath = path.join(__dirname, "..");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(basePath, 'dist'),
    filename: 'allone-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin()]
};