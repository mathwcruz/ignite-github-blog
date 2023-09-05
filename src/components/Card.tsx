import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  // cursor-pointer border-2 border-gray-800 hover:border-gray-400 hover:scale-105 transition-colors duration-150 ease-linear
  return (
    <div
      className={`min-w-[316px] min-h-[180px] rounded-lg p-8 flex items-center justify-center bg-gray-600 ${className}`}
    >
      {children}
    </div>
  )
}
