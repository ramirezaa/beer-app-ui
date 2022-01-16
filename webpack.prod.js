const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

 module.exports = merge(common, {
   output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
   mode: 'production',
   devtool: 'source-map'
 });