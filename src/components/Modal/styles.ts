import classNames from 'classnames'

export const Wrapper = classNames(
  'fixed',
  'inset-0',
  'z-50',
  'w-[100vw]',
  'h-[100vh]',
)

export const MotionDiv = classNames(
  'w-[550px]',
  'max-lg:w-[350px]',
  'ml-auto',
  'mr-auto',
  'mt-32',
)

export const Overlay = classNames('fixed', 'inset-0', 'bg-black', 'opacity-50')

export const ContentWrapper = classNames(
  'transform',
  'bg-white',
  'rounded-md',
  'shadow-2xl',
)

export const ContentTitle = classNames(
  'p-4',
  'rounded-tl-md',
  'text-lg',
  'text-tertiaryLight',
  'font-medium',
  'text-gray-900',
  'bg-primaryDark',
  'shadow-lg',
)

export const Content = classNames('p-4')

export const ButtonClose = classNames(
  'absolute',
  '-right-2',
  '-top-2',
  'bg-white',
  'p-[0.1rem]',
  'rounded-full',
  'text-2xl',
  'transition-colors',
  'text-red-500',
  'hover:text-red-600',
)
