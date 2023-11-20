import { clsx } from 'clsx'

export interface BurgerProperties {
  handleOpen: () => void
  isOpen: boolean
}

export const Burger = ({ handleOpen, isOpen }: BurgerProperties) => {
  const style = clsx('block h-0.5 w-8', isOpen ? 'bg-active-link' : 'bg-dark-blue')

  return (
    <button
      className="flex flex-col items-center justify-center space-y-2"
      onClick={handleOpen}
    >
      <span className={style}></span>
      <span className={style}></span>
      <span className={style}></span>
    </button>
  )
}
