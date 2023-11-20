import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { APP_META } from './meta.config'

type IMetaProperties = {
  title: string
  description: string
  canonical?: string
}

const Meta = (props: IMetaProperties) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet="utf8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
          key="icon16"
        />
        <link rel="icon" href={`${router.basePath}/next.svg`} key="favicon" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          locale: APP_META.locale,
          site_name: APP_META.site_name,
        }}
      />
    </>
  )
}

export { Meta }
