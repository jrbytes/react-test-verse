import { render, screen } from '@testing-library/react'

import { Message, MessageType } from '../../components/Message'

describe('Message', () => {
  test('should render success Message', async () => {
    render(<Message type={MessageType.SUCCESS} value="Mensagem" />)
    expect(
      screen.getByRole('heading', { name: /sucesso/i }),
    ).toBeInTheDocument()
    const message = screen.getByText(/mensagem/i)
    expect(message).toBeInTheDocument()
    expect(message).toHaveClass('text-sm', 'text-tertiaryDark')
  })

  test('should render error Message', async () => {
    render(<Message type={MessageType.ERROR} value="Mensagem" />)
    expect(screen.getByRole('heading', { name: /erro/i })).toBeInTheDocument()
    const message = screen.getByText(/mensagem/i)
    expect(message).toBeInTheDocument()
    expect(message).toHaveClass('text-sm', 'text-white')
  })
})
