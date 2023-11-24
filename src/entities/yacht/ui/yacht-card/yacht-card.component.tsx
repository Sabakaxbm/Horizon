import type { IYacht } from '@entities/yacht/model/yacht.model'
import img from '@public/image/heroMobile.webp'
import { ButtonComponent } from '@shared/ui/button'
import Image from 'next/image'

interface YachtCardProperties {
  yacht?: IYacht
}
export const YachtCardComponent = (props: YachtCardProperties) => {
  const { yacht } = props
  return (
    <article className={'rounded bg-white font-manrope font-semibold'}>
      <div className={'p-5 py-4'}>
        <h5 className={'text-title-card font-bold text-active-link'}>{yacht?.title}</h5>
        <div className={'text-[0.875rem] text-gray-sub-text'}>
          Length: {yacht?.length}
        </div>
      </div>
      <div className={'relative h-[13.125rem] w-full'}>
        <Image src={img} alt={'img'} fill />
      </div>
      <div className={'p-5'}>
        <div className={'flex justify-between'}>
          <p className={'text-gray-sub-text'}>Guest Day:</p>
          <span className={'text-active-link'}>{yacht?.info.guestDay}</span>
        </div>
        <div className={'mt-4 flex items-center justify-between text-[1.25rem]'}>
          <div className={'flex gap-1'}>
            <p className={'text-active-link'}>THB</p>
            <span className={'text-dark-blue'}>{yacht?.info.price}</span>
          </div>
          <ButtonComponent className={'px-6 py-3'}>View</ButtonComponent>
        </div>
      </div>
      <div className={'h-5 rounded-b bg-active-link'} />
    </article>
  )
}
