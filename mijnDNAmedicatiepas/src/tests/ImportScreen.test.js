import React from 'react'
import { render, screen } from '@testing-library/react-native'

import Import from '../screens/ImportScreen'

describe('Test import screen', () => {
  it('renders default elements', async () => {
    render(<Import/>)

    const buttons = await screen.findAllByRole('button')
    expect(buttons).toHaveLength(2)
  })
})
