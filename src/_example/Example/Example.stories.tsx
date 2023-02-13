import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BSExample from './Example'

export default {
  title: 'Components/Example',
  component: BSExample
} as ComponentMeta<typeof BSExample>

const Template: ComponentStory<typeof BSExample> = () => <BSExample />

export const Example = Template.bind({})
