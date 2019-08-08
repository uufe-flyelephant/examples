const webpack = require('webpack')
const path = require('path')

console.log(path.resolve(__dirname, '.././07-loader/./src/foo1.js'))
debugger

const webpackConfig = {
  context: __dirname,
  mode: 'none',
  target: 'node',
  entry: {
    index: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: path.resolve(__dirname, './customloader/loader1.js') },
          { loader: path.resolve(__dirname, './customloader/loader2.js') }
        ]
      },
      {
        // test: /foo\.js$/,
        test: new RegExp(path.join(__dirname, './src/foo.js').replace(/\./g, '\\\.').replace(/\//g, '\\\/')),
        use: {
          loader: path.resolve(__dirname, './customloader/loader3.js')
        }
      }
    ]
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

