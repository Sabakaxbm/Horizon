import { t } from 'i18next'

export const HeadingComponent = () => {
  return (
    <>
      <div className={'mt-5 text-[0.875rem]'}>
        <h2 className={'flex flex-col uppercase'}>
          {t('hero.top.luxury')} <span>{t('hero.top.hire')}</span>
        </h2>
      </div>
      <h1
        className={
          'pb-2 font-montserrat text-[2.5rem] uppercase leading-[3rem] text-white'
        }
      >
        {t('hero.logo.yacht')} <br />
        {t('hero.logo.charter')}
        <br />
        {t('hero.logo.phuket')}
      </h1>
      <p className={'flex flex-col gap-1 text-[0.75rem] font-semibold text-white'}>
        {t('hero.quote.first')}
        <span> {t('hero.quote.last')}</span>
      </p>
    </>
  )
}
