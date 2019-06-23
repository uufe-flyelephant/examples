const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        // 为动态加载的 chunk 配置输出文件的名称
        chunkFilename: '[name].js',
        path: path.join(__dirname, './dist')
    },
    mode: 'none',
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
    // devtool: 'source-map'
}