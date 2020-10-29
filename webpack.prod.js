const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

// process.env.TZ = 'America/Denver'

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map'
});
