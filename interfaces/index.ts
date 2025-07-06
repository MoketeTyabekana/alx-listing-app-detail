interface CardProps {
  title: string
  description: string
  children?: React.ReactNode
}

interface ButtonProps {
  label: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}