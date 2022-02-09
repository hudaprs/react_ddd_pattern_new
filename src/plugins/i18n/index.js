// i18n
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

/**
 * @description Load locale message in all of modules
 *
 * @return {object} objects of list locale in all modules
 */
const loadLocaleMessages = () => {
  const locales = require.context(
    'modules',
    true,
    /[A-Za-z0-9-_,\s]+\.locale\.json$/i
  )
  const messages = {}
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./gi)
    if (matched && matched.length > 1) {
      const locale = matched[1].replace('.', '')
      messages[locale] = {
        translation: {
          ...messages[locale]?.translation,
          ...locales(key)
        }
      }
    }
  })

  return messages
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: loadLocaleMessages(),
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

export default i18n
