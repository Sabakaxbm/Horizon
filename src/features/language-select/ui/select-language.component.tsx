import { useSelect } from '@shared/lib'
import { optionsLang } from '@shared/lib/constants'
import { SelectComponent } from '@shared/ui/select'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

interface SelectLanguageProperties {
  openDown?: boolean
}

export const SelectLanguageComponent = ({ openDown }: SelectLanguageProperties) => {
  const router = useRouter()
  const { pathname, query, locale } = router
  const { i18n } = useTranslation()
  const handleLanguage = (value: string) => {
    i18n.changeLanguage(value)
    router.push(
      {
        pathname,
        query: { ...query },
      },
      undefined,
      { locale: value } // Отключаем автоматическое определение локали
    )
  }

  const { selected, handleElement } = useSelect(optionsLang, handleLanguage)

  return (
    <SelectComponent
      options={optionsLang}
      selected={selected || null}
      placeholder={locale?.toLocaleUpperCase()}
      onChange={handleElement}
      openDown={openDown}
    />
  )
}
