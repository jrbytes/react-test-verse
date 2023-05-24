import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Modal, ModalProps } from '../../components/Modal'

type SutParams = Pick<ModalProps, 'openButtonText' | 'isOpenModal'>

const makeSut = (props: SutParams) => {
  render(
    <Modal title="Modal de teste" {...props}>
      <p>Conteúdo do modal</p>
    </Modal>,
  )
}

describe('Modal', () => {
  test('should render Modal', async () => {
    makeSut({ openButtonText: 'Abrir modal' })
    await userEvent.click(screen.getByRole('button', { name: /abrir modal/i }))
    expect(
      screen.getByRole('heading', { level: 3, name: /modal de teste/i }),
    ).toBeDefined()
    expect(screen.getByText(/conteúdo do modal/i)).toBeDefined()
  })

  test('should render with open Modal', async () => {
    makeSut({ isOpenModal: true })
    expect(
      screen.getByRole('heading', { level: 3, name: /modal de teste/i }),
    ).toBeDefined()
    expect(screen.getByText(/conteúdo do modal/i)).toBeDefined()
  })

  test('should to close Modal', async () => {
    makeSut({ openButtonText: 'Abrir modal' })
    expect(screen.queryByText(/conteúdo do modal/i)).not.toBeInTheDocument()
    expect(
      screen.queryByLabelText(/botão para fechar o modal/i),
    ).not.toBeInTheDocument()
    const openButton = screen.getByRole('button', { name: /abrir modal/i })
    await userEvent.click(openButton)

    expect(screen.getByText(/conteúdo do modal/i)).toBeInTheDocument()
    const closeButton = screen.getByLabelText(/botão para fechar o modal/i)
    await userEvent.click(closeButton)
    await waitFor(() => {
      expect(screen.queryByText(/conteúdo do modal/i)).toBeNull()
    })
  })

  test('should to close Modal with escape: ESC', async () => {
    makeSut({ openButtonText: 'Abrir modal' })
    expect(screen.queryByText(/conteúdo do modal/i)).not.toBeInTheDocument()
    expect(
      screen.queryByLabelText(/botão para fechar o modal/i),
    ).not.toBeInTheDocument()
    const openButton = screen.getByRole('button', { name: /abrir modal/i })
    await userEvent.click(openButton)

    expect(screen.getByText(/conteúdo do modal/i)).toBeInTheDocument()
    await userEvent.keyboard('{Escape}')
    await waitFor(() => {
      expect(screen.queryByText(/conteúdo do modal/i)).toBeNull()
    })
  })
})
