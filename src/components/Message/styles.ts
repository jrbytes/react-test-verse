import classNames from 'classnames'

import { MessageType } from '.'

export const Wrapper = (type: MessageType) =>
  classNames(
    'w-full',
    type === MessageType.ERROR ? 'bg-red-400' : 'bg-green-400',
    'border-l-4',
    type === MessageType.ERROR ? 'border-l-red-700' : 'border-l-green-700',
    'px-4',
    'py-2',
    'rounded',
  )

export const Title = (type: MessageType) =>
  classNames(
    'text-md',
    'font-bold',
    type === MessageType.ERROR ? 'text-white' : 'text-tertiaryDark',
  )

export const Paragraph = (type: MessageType) =>
  classNames(
    'text-sm',
    type === MessageType.ERROR ? 'text-white' : 'text-tertiaryDark',
  )
