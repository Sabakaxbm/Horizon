import '@app/globals.scss'
import '../../i18next.config'

import { Meta } from '@shared/meta'
import { Layout } from '@widgets/layout'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Suspense } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout
          className={'mx-[1.5rem]'}
          Meta={<Meta description="Horizon cruises next" title="Horizon cruises" />}
        >
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </>
  )
}

export default appWithTranslation(MyApp)
