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

const AppBaseHeader = memo(() => {
  // Hook
  const navigate = useNavigate()

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
      <StyledContainer>
        <h5 onClick={onNavigateToRoot}>Your App</h5>

        <div>
          <ul>
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
    </StyledWrapper>
  )
})

AppBaseHeader.displayName = 'AppBaseHeader'

export { AppBaseHeader }
