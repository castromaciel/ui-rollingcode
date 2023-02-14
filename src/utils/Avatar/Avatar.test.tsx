/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Avatar } from '..'
import { AvatarProps } from './Avatar'

const userAvatar: AvatarProps = {
  image: 'https://picsum.photos/300/300',
  label: 'Maciel Castro'
}

const userWithoutLabelAvatar: AvatarProps = {
  image: 'https://picsum.photos/300/300',
  label: ''
}

const squareUserAvatar: AvatarProps = {
  image: 'https://picsum.photos/300/300',
  label: 'Maciel Castro',
  shape: 'square',
  size: 'xl'
}

describe('Avatar', () => {
  test('Should render avatar', () => {
    render(<Avatar {...userAvatar} />)

    const element = screen.getByAltText('Maciel Castro')
    expect(element).toBeInTheDocument()
  })

  test('Should render avatar square', () => {
    render(<Avatar {...squareUserAvatar} />)

    const element = screen.getByAltText('Maciel Castro')
    expect(element).toHaveClass('square')
  })

  test('Should render avatar with alternative text', () => {
    render(<Avatar {...userWithoutLabelAvatar} />)

    const element = screen.getByAltText('avatar')
    expect(element).toBeInTheDocument()
  })
})
