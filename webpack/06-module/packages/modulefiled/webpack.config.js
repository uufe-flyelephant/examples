const webpack = require('webpack')
const path = require('path')

const webpackConfig = {
  context: __dirname,
  mode: 'none',
  target: 'node',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
  }
}
webpack(webpackConfig).run(function(err, stats){
	if (err || stats.hasErrors()) {
    // Handle errors here
		console.log(stats.toString())
  } else {
  	console.log('run webpack over');
	}
})

