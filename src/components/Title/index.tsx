import React from 'react'

import { Colors } from '../../types/Colors'
import * as S from './styles'

type ColorsType = keyof typeof Colors

interface TitleProps {
  title: string
  subtitle?: string
  color?: `text-${ColorsType}`
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export function Title({
  title,
  subtitle,
  color = 'text-primary',
  level = 'h2',
}: TitleProps) {
  const heading = React.createElement(
    level,
    {
      className: S.Title(color, subtitle),
    },
    title,
  )

  return (
    <>
      {heading}
      {subtitle && <p className={S.Subtitle(color, subtitle)}>{subtitle}</p>}
    </>
  )
}
