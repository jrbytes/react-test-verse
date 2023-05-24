import classNames from 'classnames'

import { ContainerProps } from '.'

export const Wrapper = (flexDirection: ContainerProps['flexDirection']) => {
  const resultFlexDirection = flexDirection === 'row' ? 'flex-row' : 'flex-col'

  return classNames(
    `flex ${resultFlexDirection} max-w-[1024px] ml-auto mr-auto pl-2 pr-2`,
  )
}
