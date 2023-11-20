import { SelectLanguageComponent } from '@features/language-select'
import { Portal } from '@shared/lib/utils'
import { Burger } from '@shared/ui/burger'
import { IconComponent } from '@shared/ui/icons'
import { LinkComponent } from '@shared/ui/link'
import { ModalComponent } from '@shared/ui/modal'
import { clsx } from 'clsx'
import { t } from 'i18next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Links } from '../navlinks'

export const MobileNavigationComponent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const handleOpen = () => {
    setIsVisible(!isVisible)
  }

  const pathname = usePathname()
  return (
    <div className={clsx('flex justify-between lg:hidden')}>
      <Link href={'/'}>
        <IconComponent name={'Logo'} className={'h-[1.75rem] w-[7.93rem]'} />
      </Link>
      <Burger handleOpen={handleOpen} isOpen={isVisible} />
      <Portal id={'myportal'}>
        <ModalComponent onClick={handleOpen} isOpen={isVisible}>
          <div className={'mx-page my-[2.125rem] flex h-nav-height w-screen flex-col '}>
            <nav className={'mb-auto flex flex-col'}>
              {Links.map((item) => (
                <LinkComponent
                  classNames={clsx(
                    'py-3 text-xl',
                    pathname === item.url ? 'text-active-link' : 'text-base-grey'
                  )}
                  key={item.name}
                  url={item.url}
                >
                  {t(`nav.${item.name}`)}
                </LinkComponent>
              ))}
            </nav>
            <SelectLanguageComponent />
          </div>
        </ModalComponent>
      </Portal>
    </div>
  )
}
