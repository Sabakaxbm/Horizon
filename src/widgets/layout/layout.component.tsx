import type { Meta } from '@shared/meta'
import * as React from 'react'

import { Header } from './header'
import { Main } from './main'

export interface ILayoutProperties extends React.ComponentProps<'div'> {
  Meta: React.ReactElement<typeof Meta>
}

export const Layout = (props: ILayoutProperties) => {
  const { children, Meta, ...rest } = props

  return (
    <>
      {Meta}
      <div {...rest} className="flex min-h-screen flex-col">
        <Layout.Header />
        <Layout.Main className={'flex min-h-full w-full flex-auto border-red-500'}>
          {children}
        </Layout.Main>
      </div>
    </>
  )
}
Layout.Header = Header
Layout.Main = Main
