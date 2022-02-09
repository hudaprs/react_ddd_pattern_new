// i18n
import { useTranslation } from 'react-i18next'

const AppUI = () => {
  // Hook
  const { t } = useTranslation()

  return <h1>{t('app.welcome')}</h1>
}

export { AppUI }
