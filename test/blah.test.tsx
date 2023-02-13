/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Example } from '../src/example'

describe('ExampleComponent', () => {
  test('renders without crashing', () => {
    render(<Example />);

    const element = screen.getByText('Example component');
    expect(element).toBeInTheDocument()
  })
})
