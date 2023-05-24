import classNames from 'classnames'

import { ButtonProps } from '.'

type ButtonCSSProps = Pick<ButtonProps, 'color' | 'size' | 'fullWidth'>

function handleSize(size: ButtonCSSProps['size']) {
  switch (size) {
    case 'small':
      return 'text-sm'
    case 'medium':
      return 'text-md'
    default:
      return 'text-lg'
  }
}

export const Button = ({ color, size, fullWidth }: ButtonCSSProps) => {
  const bgColorCss = color ? `bg-${color}` : 'bg-primary'
  const sizeCss = size === 'small' ? 'px-2 py-1' : 'px-4 py-2'
  const fullWidthCss = fullWidth ? 'w-full' : ''
  const fontSizeCss = handleSize(size)

  return classNames(
    'flex',
    'items-center',
    'gap-2',
    'justify-center',
    bgColorCss,
    sizeCss,
    fullWidthCss,
    fontSizeCss,
    'text-white',
    'rounded',
    'transition-all',
    'hover:brightness-110',
    'hover:saturate-110',
  )
}
