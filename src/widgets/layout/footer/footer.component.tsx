import clsx from 'clsx'
import * as React from 'react'

export interface IFooterProperties extends React.ComponentProps<'footer'> {}
export const Footer = React.memo((props: IFooterProperties) => {
  const { className } = props
  return (
    <footer
      {...props}
      className={clsx('border-light-grey border-t-2 bg-secondary-accent', className)}
    >
      footer
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer
