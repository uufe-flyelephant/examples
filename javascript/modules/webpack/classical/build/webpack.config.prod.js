const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base.js');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'none',
})

const compiler = webpack(webpackConfig);
compiler.run()
