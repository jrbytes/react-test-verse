import { render, screen } from '@testing-library/react'

import { Title } from '../../components/Title'

describe('Title', () => {
  test('should render Title', async () => {
    render(<Title title="Title Ips" />)
    expect(screen.getByText(/title ips/i)).toHaveClass('text-primary')
  })

  test('should render Title with subtitle', async () => {
    render(<Title title="Title Ips" subtitle="Subtitle Ips" />)
    expect(screen.getByText(/subtitle ips/i)).toHaveClass('text-primary')
  })

  test('should render Title with secondary color', async () => {
    render(<Title title="Title Ips" color="text-secondary" />)
    expect(screen.getByText(/title ips/i)).toHaveClass('text-secondary')
  })

  test('should render Title with tertiary color', async () => {
    render(<Title title="Title Ips" color="text-tertiary" />)
    expect(screen.getByText(/title ips/i)).toHaveClass('text-tertiary')
  })

  test('should render with heading prop with level specific', async () => {
    render(<Title title="Title Ips" level="h5" />)
    expect(
      screen.getByRole('heading', { level: 5, name: /title ips/i }),
    ).toBeInTheDocument()
  })
})
