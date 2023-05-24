import { render, screen } from '@testing-library/react'
import { AiFillAlert } from 'react-icons/ai'

import { Button, ButtonProps } from '../../components/Button'

type SutParams = Pick<ButtonProps, 'color' | 'size' | 'fullWidth' | 'icon'>
type SutReturn = { button: HTMLElement }

const makeSut = (props?: SutParams): SutReturn => {
  render(<Button {...props}>test verse</Button>)
  const button = screen.getByRole('button', {
    name: /test verse/i,
  })
  return { button }
}

describe('Button', () => {
  test('should render button', () => {
    expect(makeSut().button).toBeInTheDocument()
  })

  test('should render primary color button', () => {
    expect(makeSut().button).toHaveClass('bg-primary')
  })

  test('should render secondary color button', () => {
    expect(makeSut({ color: 'secondary' }).button).toHaveClass('bg-secondary')
  })

  test('should render tertiary color button', () => {
    expect(makeSut({ color: 'tertiary' }).button).toHaveClass('bg-tertiary')
  })

  test('should render button with a icon', () => {
    makeSut({ icon: <AiFillAlert data-testid="icon" /> })
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  test('should render small button', () => {
    expect(makeSut({ size: 'small' }).button).toHaveClass(
      'text-sm',
      'px-2',
      'py-1',
    )
  })

  test('should render medium button', () => {
    expect(makeSut({ size: 'medium' }).button).toHaveClass(
      'text-md',
      'px-4',
      'py-2',
    )
  })

  test('should render large button', () => {
    expect(makeSut({ size: 'large' }).button).toHaveClass(
      'text-lg',
      'px-4',
      'py-2',
    )
  })

  test('should render full width button', () => {
    expect(makeSut({ fullWidth: true }).button).toHaveClass('w-full')
  })
})
