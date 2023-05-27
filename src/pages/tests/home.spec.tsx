import { render } from '@testing-library/react'

import HomePage from '../../pages/index'

describe('HomePage', () => {
  test('should render HomePage', async () => {
    expect(
      render(<HomePage />).getByRole('heading', {
        level: 2,
        name: /homepage/i,
      }),
    ).toBeDefined()
  })
})
