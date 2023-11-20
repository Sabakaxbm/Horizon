import clsx from 'clsx'
import * as React from 'react'

export interface IMainProperties extends React.ComponentProps<'main'> {}
export const Main = (props: IMainProperties) => {
  const { className, children } = props
  return (
    <main {...props} className={clsx('', className)}>
      {children}
    </main>
  )
}
