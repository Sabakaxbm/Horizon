import HeroMobile from '@public/image/heroMobile.png'
import { ContactsComponent, HeadingComponent } from '@widgets/layout/hero/ui'
import Image from 'next/image'

export const HeroComponent = () => {
  // max-h-[45.125rem]
  return (
    <div
      className={
        'relative mb-[3.875rem] h-full max-h-[29.875rem] w-full lg:max-h-[48rem]'
      }
    >
      <Image
        src={HeroMobile}
        alt={'heroImage'}
        fill
        style={{
          objectFit: 'cover', // cover, contain, none
          objectPosition: '37% 50%',
        }}
        // sizes="(max-width: 1700px) 80vw, (max-width: 768px) 50vw 100vw"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div
        className={
          'relative grid h-full w-full grid-cols-1 grid-rows-2 justify-between p-page-mobile font-manrope font-bold text-white lg:grid-cols-2 lg:p-page lg:pt-8'
        }
      >
        <HeadingComponent />
        <ContactsComponent />
      </div>
    </div>
  )
}
