// React
import { memo } from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// Custom Hook
import { useAuth } from 'modules/auth/hooks'

const AppUI = memo(() => {
  // Hook
  const { t } = useTranslation()
  const { authIsAuthenticated, authAuthenticatedUser } = useAuth()

  return (
    <div>
      <h1>{t('app.welcome')}</h1>

      <h5 style={{ marginTop: 20 }}>
        {!authIsAuthenticated
          ? t('auth.notLoggedIn')
          : `Hallo ${authAuthenticatedUser.name}`}
      </h5>
    </div>
  )
})

AppUI.displayName = 'AppUI'

export { AppUI }
