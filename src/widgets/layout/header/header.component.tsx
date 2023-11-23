import clsx from 'clsx'
import * as React from 'react'

import { NavigationComponent } from '../navigation'

export interface IHeaderProperties extends React.ComponentProps<'header'> {}

export const Header = React.memo((props: IHeaderProperties) => {
  const { className } = props

  return (
    <header
      {...props}
      className={clsx(
        'sticky top-0 z-10 w-full shrink-0 bg-white px-[1.5rem] py-[1.75rem]',
        className
      )}
    >
      <NavigationComponent />
    </header>
  )
})
Header.displayName = 'Header'

export default Header
