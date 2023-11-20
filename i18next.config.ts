import translationEN from '@public/locales/en/common.json'
import translationRU from '@public/locales/ru/common.json'
import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
}
export default i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'ru', // use en if detected lng is not available
    resources,

    debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  })
//     order: ['queryString', 'cookie'],
