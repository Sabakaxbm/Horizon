import type { ReactNode } from 'react'
import { useEffect } from 'react'

interface IModalComponentProperties {
  onClick?: () => void
  children?: ReactNode
  isOpen: boolean
}

export const ModalComponent = ({ isOpen, children }: IModalComponentProperties) => {
  const setBody = () => {
    document.body.style.overflow = 'auto'
  }
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return setBody()
  }, [isOpen])
  return (
    <>
      {isOpen ? (
        <div className={'fixed left-0 top-[5.2rem] z-10 flex h-screen w-screen bg-white'}>
          {children}
        </div>
      ) : null}
    </>
  )
}
