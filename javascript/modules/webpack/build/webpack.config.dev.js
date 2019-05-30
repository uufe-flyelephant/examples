const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackDevServer = require('webpack-dev-server');
const baseWebpackConfig = require('./webpack.config.base.js');
const open = require('open');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})

const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const compiler = webpack(webpackConfig);
const server = new webpackDevServer(compiler, options);

server.listen(3000, 'localhost', () => {
  open("http://127.0.0.1:3000/");
  console.log('dev server listening on port 5000');
});