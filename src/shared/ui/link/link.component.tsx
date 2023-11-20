import { clsx } from 'clsx'
import Link from 'next/link'

export interface LinkProperties {
  children?: string
  classNames?: any
  url: string
  shadow?: boolean
  onClick?: () => void
}

export const LinkComponent = (props: LinkProperties) => {
  const { classNames, shadow = true, url, onClick, children } = props
  return (
    <Link
      className={clsx(
        'cursor-pointer font-manrope font-medium leading-5 hover:text-active-link',
        shadow && 'drop-shadow-3xl',
        classNames
      )}
      href={url}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
