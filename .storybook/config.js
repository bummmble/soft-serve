import global from 'global'
import path from 'path'
import { addDecorator, configure } from '@storybook/react'
import 'storybook-chromatic'
import '../src/index.scss'

const root = path.resolve(__dirname, '..')

if (process.env.NODE_ENV === 'test') {
	global.setInterval = (cb, timeout) => {
		cb()
		return 0
	}

	global.clearInterval = () => {}
}

if (process.env.NODE_ENV === 'test' && require.context == null) {
	require('babel-plugin-require-context-hook/register')()
	require.context = function context(directory, subDirectories, expression) {
		return global.__requireContext(
			__dirname,
			directory,
			subDirectories,
			expression
		)
	}
}

const storyLoader = require.context('../src/stories', true, /\.stories\.js$/)

function loadStories() {
	storyLoader.keys().forEach(file => storyLoader(file))
}

configure(loadStories, module)



