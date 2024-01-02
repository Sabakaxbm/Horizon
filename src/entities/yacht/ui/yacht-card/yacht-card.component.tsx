import type { IYacht } from '@entities/yacht/model/yacht.model'
import img from '@public/image/heroMobile.webp'
import { ButtonComponent } from '@shared/ui/button'
import { IconComponent } from '@shared/ui/icons'
import { clsx } from 'clsx'
import Image from 'next/image'

interface YachtCardProperties {
  yacht?: IYacht
}
const fieldsName = [
  {
    field: 'guestDay',
    text: 'Guest Day',
  },
  {
    field: 'guestSleeping',
    text: 'Guest Sleeping',
  },
  {
    field: 'maxSpeed',
    text: 'Max Speed',
  },
  {
    field: 'cruisingSpeed',
    text: 'Cruising Speed',
  },
  {
    field: 'crew',
    text: 'Crew',
  },
]
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
        <div
          className={
            'absolute -bottom-6 right-4 flex transform-gpu cursor-pointer items-center justify-center rounded-xl bg-white py-1 transition-transform hover:scale-110'
          }
        >
          <IconComponent className={'h-10 w-16'} name={'youtube'} />
        </div>
      </div>
      <div className={'p-5'}>
        <div className={'flex flex-col [&>*:last-child]:text-blue-600'}>
          {fieldsName.map((name) => (
            <div
              key={`${name} + ${yacht?.info.price}`}
              className={clsx(
                'mt-1 flex justify-between',
                name.field === 'crew' ? '' : 'border-b border-dashed border-grey-dash'
              )}
            >
              <p className={'text-gray-sub-text'}>{name.text}:</p>
              <span className={'mb-1 text-active-link'}>{yacht?.info[name.field]}</span>
            </div>
          ))}
        </div>
        <div className={'mt-6 flex items-center justify-between text-[1.25rem]'}>
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
