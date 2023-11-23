import { RegistrationComponent } from '@features/registration'
import { IconComponent } from '@shared/ui/icons'
import { t } from 'i18next'

const styleBlockContacts = 'mt-auto flex h-[3.875rem] flex-col items-center gap-3 lg:mt-0'
export const ContactsComponent = () => {
  return (
    <div
      className={
        'mt-auto grid h-full grid-cols-2 gap-4 lg:ml-auto lg:mt-[0.875rem] lg:grid-cols-1 lg:grid-rows-cus lg:gap-8'
      }
    >
      <div className={styleBlockContacts}>
        <p className={'text-white-blue'}>{t('hero.contacts.write')}</p>
        <div className={'flex flex-1 gap-3 text-white'}>
          <IconComponent name={'whatsapp'} className={'h-7 w-7 fill-white'} />
          <IconComponent name={'telegram'} className={'h-7 w-7'} />
          <IconComponent name={'instagram'} className={'h-7 w-7'} />
        </div>
      </div>
      <div className={styleBlockContacts}>
        <p className={'text-white-blue'}>{t('hero.contacts.call')}</p>
        <p className={'text-white sm:text-[1.25rem]'}>+66 86 465 4545</p>
      </div>
      <RegistrationComponent />
    </div>
  )
}
