export interface IMyComponentProps {
  header: string
  content: string
  size: 'normal' | 'small'
  bgColor?: string
}

export interface IMyComponentStyledProps {
  size: IMyComponentProps['size'],
  bgColor: IMyComponentProps['bgColor']
}
