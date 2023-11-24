import HeroMobile2 from '@public/image/heroMobile.webp'
import { ContactsComponent, HeadingComponent } from '@widgets/layout/hero/ui'
import Image from 'next/image'

export const HeroComponent = () => {
  // max-h-[45.125rem]
  return (
    <div
      className={
        'relative h-full max-h-[29.875rem] w-full lg:mb-[3.875rem] lg:max-h-[48rem]'
      }
    >
      <Image
        src={HeroMobile2}
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
