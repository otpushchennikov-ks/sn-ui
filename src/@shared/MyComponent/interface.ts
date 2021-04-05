export interface IMyComponentProps {
  header: string
  mapHeader?: (header: string) => string
  content: string
  size: 'normal' | 'small'
  bgColor?: string
  onClick?: () => void
}

export interface IMyComponentStyledProps {
  size: IMyComponentProps['size'],
  bgColor: IMyComponentProps['bgColor']
}
