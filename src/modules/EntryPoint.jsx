// React
import { memo, useEffect, useCallback, Suspense } from 'react'

// React Router Dom
import { Routes, Route } from 'react-router-dom'

// Plugins
import { routes } from 'plugins'

// Styles
import { GlobalStyle } from './styles'

// Custom Hook
import { useLocalization } from 'modules/localization/hooks'
import { useAuth } from 'modules/auth/hooks'

const EntryPoint = memo(() => {
  // Hook
  const { localizationLanguage, localizationSetLanguage } = useLocalization()
  const { authIsAuthenticated } = useAuth()

  useEffect(() => {
    // Init the language
    localizationSetLanguage(localizationLanguage)
  }, [])

  /**
   * @description Render Single Route
   *
   * @param {object} route
   * @param {number} index
   *
   * @return {JSX.Element} JSX.Element
   */
  const renderSingleRoute = useCallback((route, index) => {
    return (
      <Route
        path={route.path}
        element={
          <route.meta.layoutElement {...route.meta}>
            <route.element {...route.meta} />
          </route.meta.layoutElement>
        }
        key={index}
      />
    )
  }, [])

  /**
   * @description Render routes
   *
   * @param {object} route
   * @param {number} index
   *
   * @return {any} any
   */
  const renderRoutes = useCallback(
    (route = {}, index) => {
      if (route?.children?.length !== 0) {
        return (
          <Route path={route.path} element={<route.element />} key={index}>
            {route?.children?.map((childrenRoute, childrenIndex) => {
              // Check if route is nested, do recursive
              if (childrenRoute?.children?.length > 0) {
                return renderRoutes(childrenRoute, childrenIndex)
              } else {
                return renderSingleRoute(childrenRoute, childrenIndex)
              }
            })}
          </Route>
        )
      } else {
        return renderSingleRoute(route, index)
      }
    },
    [authIsAuthenticated]
  )

  return (
    <>
      {/* Styles */}
      <GlobalStyle />

      {/* Routes */}
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          {routes.map((route, index) => renderRoutes(route, index))}
        </Routes>
      </Suspense>
    </>
  )
})

EntryPoint.displayName = 'EntryPoint'

export { EntryPoint }
