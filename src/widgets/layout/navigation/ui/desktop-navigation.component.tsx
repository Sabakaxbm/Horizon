import { SelectLanguageComponent } from '@features/language-select'
import { IconComponent } from '@shared/ui/icons'
import { LinkComponent } from '@shared/ui/link'
import { clsx } from 'clsx'
import { t } from 'i18next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Links } from './navlinks'

export const DesktopNavigationComponent = () => {
  const pathname = usePathname()
  return (
    <div className={'hidden items-center justify-between lg:flex'}>
      <Link href={'/'}>
        <IconComponent name={'Logo'} className={'h-[1.75rem] w-[7.93rem]'} />
      </Link>
      <nav className={'flex gap-[1.5rem] font-normal'}>
        {Links.map((item) => (
          <LinkComponent
            classNames={clsx(
              'text-sm',
              pathname === item.url ? 'text-active-link lg:font-bold' : 'text-base-grey'
            )}
            url={item.url}
            key={item.name}
            shadow={false}
          >
            {t(`nav.${item.name}`)}
          </LinkComponent>
        ))}
      </nav>
      <SelectLanguageComponent />
    </div>
  )
}
