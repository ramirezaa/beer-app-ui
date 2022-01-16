const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        historyApiFallback: true
    },
    mode: 'development'
});