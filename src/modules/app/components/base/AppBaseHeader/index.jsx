// React
import { useCallback, memo } from 'react'

// React Router Dom
import { useNavigate } from 'react-router-dom'

// Lookup
import { headerItems } from './headerItems.lookup'

// Styles
import { StyledWrapper, StyledContainer } from './styles'

// Constant
import { APP_URL } from 'modules/app/constant'

// Components
import { AppBaseContainer } from 'modules/app/components/base'

// React Redux
import { useDispatch } from 'react-redux'

// Custom Hook
import { useLocalization } from 'modules/localization/hook/use-localization.hook'

const AppBaseHeader = memo(() => {
  // Hook
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { localizationLanguage, LOCALIZATION_SET_LANGUAGE_REQUESTED } =
    useLocalization()

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

  /**
   * @description Change language
   *
   * @param {string} language
   *
   * @return {void} void
   */
  const onChangeLanguage = useCallback((language) => {
    dispatch({
      type: LOCALIZATION_SET_LANGUAGE_REQUESTED,
      payload: language === 'en' ? 'id' : 'en'
    })

    // eslint-disable-next-line
  }, [])

  return (
    <StyledWrapper>
      <AppBaseContainer>
        <StyledContainer>
          <h5 onClick={onNavigateToRoot}>Your App</h5>

          <div>
            <ul>
              <li onClick={() => onChangeLanguage(localizationLanguage)}>
                {localizationLanguage}
              </li>
              {headerItems.map((headerItem, index) => (
                <li
                  key={index}
                  onClick={() => onRedirectHeaderItems(headerItem.route)}
                >
                  {headerItem.title}
                </li>
              ))}
            </ul>
          </div>
        </StyledContainer>
      </AppBaseContainer>
    </StyledWrapper>
  )
})

AppBaseHeader.displayName = 'AppBaseHeader'

export { AppBaseHeader }
