import { t } from 'i18next'

export const HeadingComponent = () => {
  return (
    <div className={'grid w-full grid-cols-1 grid-rows-cus lg:grid-rows-1'}>
      <div className={'flex items-center text-[0.875rem]'}>
        <h2 className={'flex flex-col uppercase'}>
          {t('hero.top.luxury')} <span>{t('hero.top.hire')}</span>
        </h2>
      </div>
      <h1
        className={
          'font-montserrat text-[2.5rem] uppercase leading-[3rem] text-white lg:mb-4 lg:pb-0 lg:text-[3.625rem] lg:leading-[4rem]'
        }
      >
        {t('hero.logo.yacht')} <br />
        {t('hero.logo.charter')}
        <br />
        {t('hero.logo.phuket')}
      </h1>
      <p
        className={
          'flex flex-col gap-1 text-[0.75rem] font-semibold text-white lg:gap-0 lg:text-[1.125rem]'
        }
      >
        {t('hero.quote.first')}
        <span> {t('hero.quote.last')}</span>
      </p>
    </div>
  )
}
