import { render, screen, within } from '@testing-library/react'

import HomePage from '../../pages/index'

describe('HomePage', () => {
  test('should render HomePage', async () => {
    render(<HomePage />)
    const main = within(screen.getByRole('main'))
    const header = within(
      main.getByRole('heading', {
        level: 2,
      }),
    )
    expect(header.getByText(/homepage/i)).toBeDefined()
  })
})
