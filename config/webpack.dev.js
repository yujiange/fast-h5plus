const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { devPage } = require('./page.config');
const ip = require('ip');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: ip.address(),
    contentBase: './dist',
    compress: true,
    port: 9000,
    index: devPage + '.html',
    proxy: {}
  }
})