const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
  // mode: 'none',
  mode: 'production',
  context: __dirname,
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ "@babel/preset-env", {
                useBuiltIns: 'usage',
                // useBuiltIns: 'entry',
                corejs: 3
              }]
            ],
            "plugins": [
              ["@babel/plugin-transform-runtime",{
                corejs: 3
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}

