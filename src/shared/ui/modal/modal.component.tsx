import { clsx } from 'clsx'
import type { ReactNode } from 'react'
import { useEffect } from 'react'

interface IModalComponentProperties {
  onClick?: () => void
  children?: ReactNode
  isOpen: boolean
  className?: string
}

export const ModalComponent = ({
  isOpen,
  children,
  className,
}: IModalComponentProperties) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

  return <>{isOpen ? <div className={clsx('', className)}>{children}</div> : null}</>
}
