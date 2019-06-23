const path = require('path')

module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    mode: 'none',
    // devtool: 'source-map'
}