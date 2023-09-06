import { ReactNode, CanvasHTMLAttributes } from 'react'

interface CardProps extends CanvasHTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={`min-w-[316px] min-h-[180px] rounded-lg p-8 flex bg-gray-600 ${className}`}
      {...rest}
    >
      {children}
    </div>
  )
}
