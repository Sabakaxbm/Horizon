import { SelectComponent } from '@shared/ui/select'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'

const options = [
  { title: 'EN', value: 'en' },
  { title: 'RU', value: 'ru' },
]

interface SelectLanguageProperties {
  openDown?: boolean
}

export const SelectLanguageComponent = ({ openDown }: SelectLanguageProperties) => {
  const router = useRouter()
  const { pathname, query, locale } = router
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<string>('')
  const handleLanguage = (value: string) => {
    setLanguage(value)
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

  const selectedLaguage = options.find((item) => item.value === language)

  return (
    <SelectComponent
      options={options}
      selected={selectedLaguage || null}
      placeholder={locale?.toLocaleUpperCase()}
      onChange={handleLanguage}
      openDown={openDown}
    />
  )
}
