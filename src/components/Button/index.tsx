import { ButtonHTMLAttributes } from 'react'

import { Colors } from '../../types/Colors'
import * as S from './styles'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  color?: `${Colors}`
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  icon?: JSX.Element
  fullWidth?: boolean
} & ButtonTypes

export function Button({
  color,
  size = 'medium',
  children,
  icon,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button className={S.Button({ color, size, fullWidth })} {...props}>
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </button>
  )
}
