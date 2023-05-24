import * as S from './styles'

export enum MessageType {
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface ErrorProps {
  type: MessageType
  value: string
}

export function Message({ type, value }: ErrorProps) {
  return (
    <div className={S.Wrapper(type)}>
      <h2 className={S.Title(type)}>
        {type === MessageType.ERROR ? 'Erro' : 'Sucesso'}
      </h2>
      <p className={S.Paragraph(type)}>{value}</p>
    </div>
  )
}
