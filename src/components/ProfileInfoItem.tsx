import { ReactNode } from 'react'

interface ProfileInfoItemProps {
  children: ReactNode
}

export function ProfileInfoItem({ children }: ProfileInfoItemProps) {
  return <li className="flex items-center gap-2">{children}</li>
}
