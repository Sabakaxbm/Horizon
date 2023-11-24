import { clsx } from 'clsx'
import type { ButtonHTMLAttributes } from 'react'

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {}
export const ButtonComponent = (props: ButtonProperties) => {
  const { children, className } = props
  return (
    <button
      {...props}
      className={clsx(
        'cursor-pointer items-center justify-center rounded bg-active-link font-medium text-white hover:shadow-active-button active:bg-dark-blue',
        className
      )}
    >
      {children}
    </button>
  )
}
