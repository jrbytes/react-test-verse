import * as S from './styles'

export interface ContainerProps {
  children: React.ReactNode
  flexDirection?: 'row' | 'column'
}

export function Container({ children, flexDirection }: ContainerProps) {
  return <div className={S.Wrapper(flexDirection)}>{children}</div>
}
