import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

// Components
import Intro from '../components/Intro'

describe('Intro Component', () => {
  it('renders the title and description', () => {
    const { getByText } = render(
      <Intro title="Test Title" description="Test Description" />
    )

    expect(getByText('Test Title')).toBeInTheDocument()
    expect(getByText('Test Description')).toBeInTheDocument()
  })
})
