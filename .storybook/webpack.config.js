const path = require('path')
const webpack = require('../node_modules/@storybook/core/node_modules/webpack')

module.exports = {
	module: {
		rules: [{
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../src')
		}]
	}
}
