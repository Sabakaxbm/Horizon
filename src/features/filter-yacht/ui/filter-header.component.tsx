import bg from '@public/image/feature-bg.jpg'
import Image from 'next/image'

export const FilterHeaderComponent = () => {
  return (
    <div
      className={
        'relative flex h-[4.875rem] w-full items-center justify-center font-montserrat text-[1.5rem] font-bold text-white'
      }
    >
      <Image className={'absolute'} src={bg} alt={'FilterHeaderBG'} fill />
      <p className={'relative'}>FEATURED YACHTS</p>
    </div>
  )
}
