import '@shared/styles/global.scss'

import { FilterYachtComponent } from '@features/filter-yacht'
import { RegistrationMobileComponent } from '@features/registration'
import { HeroComponent } from '@widgets/layout/hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale ?? 'ru')),
//     },
//   }
// }

export default function RootLayout() {
  return (
    <div className={'w-full'}>
      <HeroComponent />
      <RegistrationMobileComponent />
      <section className={'px-page-mobile lg:px-page'}>
        <FilterYachtComponent />
      </section>
    </div>
  )
}
