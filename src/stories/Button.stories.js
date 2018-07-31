import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
//import { withKnobs } from '@storybook/addon-knobs'

import { Button } from '../components'

const stories = storiesOf('Button', module)
//stories.addDecorator(withKnobs)
stories.add(
	'Default',
	withInfo('A simple button')(() => (
		<Button
			color="primary"
			isDisabled={true}
		>
			Children!
		</Button>
	))
)
