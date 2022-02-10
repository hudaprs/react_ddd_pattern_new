// React
import { useCallback, memo, useMemo } from 'react'

// React Router Dom
import { useNavigate } from 'react-router-dom'

// Lookup
import { headerItems } from './headerItems.lookup'

// Styles
import { StyledWrapper, StyledContainer } from './styles'

// Constant
import { APP_URL, AUTH_MODULE } from 'modules/app/constant'

// Components
import { AppBaseContainer } from 'modules/app/components/base'

// Custom Hook
import { useLocalization } from 'modules/localization/hooks'
import { useAuth } from 'modules/auth/hooks'

// i18n
import { useTranslation } from 'react-i18next'

const AppBaseHeader = memo(() => {
  // Hook
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { localizationLanguage, localizationSetLanguage } = useLocalization()
  const { authAuthenticatedUser, authIsAuthenticated, authLogout } = useAuth()
  const authenticatedHeaders = useMemo(() => {
    return headerItems
      .filter((headerItem) =>
        authIsAuthenticated ? headerItem.module !== AUTH_MODULE : headerItem
      )
      .map((headerItem, index) => (
        <li key={index} onClick={() => onRedirectHeaderItems(headerItem.route)}>
          {t(headerItem.title)}
        </li>
      ))
  }, [authIsAuthenticated, authAuthenticatedUser, t])
  const otherHeaders = useMemo(() => {
    return authIsAuthenticated ? (
      <li onClick={authLogout}>{t('auth.logout.logout')}</li>
    ) : undefined
  }, [authIsAuthenticated, authLogout, t])

  /**
   * @description Navigate to root
   *
   * @return {void} void
   */
  const onNavigateToRoot = useCallback(() => {
    navigate(APP_URL.INDEX)

    // eslint-disable-next-line
  }, [])

  /**
   * @description Redirect to login
   *
   * @param {string} route
   *
   * @return {void} void
   */
  const onRedirectHeaderItems = useCallback((route) => {
    navigate(route)

    // eslint-disable-next-line
  }, [])

  return (
    <StyledWrapper>
      <AppBaseContainer>
        <StyledContainer>
          <h5 onClick={onNavigateToRoot}>Your App</h5>

          <div>
            <ul>
              <li
                onClick={() =>
                  localizationSetLanguage(
                    localizationLanguage === 'en' ? 'id' : 'en'
                  )
                }
              >
                {localizationLanguage}
              </li>
              {/* Authenticated Headers */}
              {authenticatedHeaders}

              {/* Other Headers, e.g logout */}
              {otherHeaders}
            </ul>
          </div>
        </StyledContainer>
      </AppBaseContainer>
    </StyledWrapper>
  )
})

AppBaseHeader.displayName = 'AppBaseHeader'

export { AppBaseHeader }
