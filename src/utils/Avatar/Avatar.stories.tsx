import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { Avatar } from '..'

export default {
  title: 'Components/Utils/Avatar',
  component: Avatar,
  argTypes: {
    image: {
      control: {
        type: 'disabled'
      },
      description: 'Imagen o Foto de perfil' 
    },
    label: { description: 'Texto alternativo del avatar' },
    size: { description: 'Tamaño del avatar' },
    shape: { description: 'Forma del avatar' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
)

export const DefaultAvatar = Template.bind({})
DefaultAvatar.args = {
  image: 'https://picsum.photos/300/300',
  size: 'md',
  shape: 'circle'
}

export const SquareAvatar = Template.bind({})
SquareAvatar.args = { 
  image: 'https://picsum.photos/300/300',
  shape: 'square'
}
