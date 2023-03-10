import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Card } from '../Card'

const classicCard = { 
  buttonRight: {
    label: 'Show me more',
    onClick: () => jest.fn()
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adip',
  image: 'https://picsum.photos/id/237/300/300',
  title: 'Classic Card'
}

const productCard = {
  buttonRight: {
    label: 'Show me more',
    onClick: () => jest.fn()
  },
  description: 'Lorem ipsum dolor sit amet, consectetur adip',
  image: 'https://picsum.photos/id/237/300/300',
  price: '2000',
  title: 'Classic Card'
}

describe('Card', () => {
  test('Renders classic', () => {
    render(<Card {...classicCard} />)

    const element = screen.getByText('Classic Card')
    expect(element).toBeInTheDocument()
  })

  test('Renders product card with price "$2000" ', () => {
    render(<Card {...productCard} mode="product" />)

    const element = screen.getByText('$2000')
    expect(element).toBeInTheDocument()
  })

  test('Click "Show me more" button', () => {
    const handleClick = jest.fn()

    render(<Card {...productCard} mode="product" buttonRight={{ ...productCard.buttonRight, onClick: handleClick }} />)
    const buttonElement = screen.getByText('Show me more')
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
