import classNames from 'classnames'

export const Title = (color: string, subtitle: string | undefined) =>
  classNames(
    color,
    'text-xl',
    'uppercase',
    'font-bold',
    !subtitle && 'my-4',
    subtitle && 'mt-4',
  )

export const Subtitle = (color: string, subtitle: string | undefined) =>
  classNames(color, 'text-sm', subtitle && 'mb-4')
