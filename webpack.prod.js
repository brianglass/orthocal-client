const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
				new webpack.DefinePlugin({
					'process.env.PORT': 8000,
					'process.env.BASE_URL': JSON.stringify('https://orthocal.info')
        })
    ]
});
