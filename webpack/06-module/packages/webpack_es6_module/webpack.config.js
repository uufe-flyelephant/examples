const webpack = require('webpack')
const path = require('path')

const webpackConfig = {
  context: __dirname,
  mode: 'none',
  // target: 'node',
  entry: './src/index.js',
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           // presets: ['@babel/preset-env'],
  //           // plugins: ["@babel/plugin-transform-runtime"]
  //           plugins: [
  //             [require("@babel/plugin-transform-modules-commonjs").default , {
  //               noInterop: true
  //             }]
  //           ]

  //         }
  //       }
  //     }
  //   ],
  // },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
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

