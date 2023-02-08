/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { ExampleComponent } from '../src/index'

describe('ExampleComponent', () => {
  test('renders without crashing', () => {
    render(
      <ExampleComponent label="Testing component" className='test' />
    )

    const element = screen.getByText('Testing component')
    expect(element).toHaveClass('test')
  })
})
