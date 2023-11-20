import { IconComponent } from '@shared/ui/icons'
import { t } from 'i18next'

export const ContactsComponent = () => {
  return (
    <div className={'mt-auto grid h-full grid-cols-2  gap-4'}>
      <div className={'mt-auto flex h-[3.875rem] flex-col items-center gap-3'}>
        <p className={'text-white-blue'}>{t('hero.contacts.write')}</p>
        <div className={'flex flex-1 gap-3'}>
          <IconComponent name={'whatsapp'} className={'h-7 w-7 fill-white'} />
          <IconComponent name={'telegram'} className={'h-7 w-7'} />
          <IconComponent name={'instagram'} className={'h-7 w-7'} />
        </div>
      </div>
      <div className={'mt-auto flex h-[3.875rem] flex-col items-center gap-3'}>
        <p className={'text-white-blue'}>{t('hero.contacts.call')}</p>
        <p className={'sm:text-[1.25rem]'}>+66 86 465 4545</p>
      </div>
    </div>
  )
}
