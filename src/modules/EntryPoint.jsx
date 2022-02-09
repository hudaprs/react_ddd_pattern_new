// React
import { useEffect, Suspense } from 'react'

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Plugins
import { routes } from 'plugins'

// Styles
import { GlobalStyle } from './styles'

// Custom Hook
import { useLocalization } from 'modules/localization/hook/use-localization.hook'

// React Redux
import { useDispatch } from 'react-redux'

const EntryPoint = () => {
  // Hook
  const dispatch = useDispatch()
  const { localizationLanguage, LOCALIZATION_SET_LANGUAGE_REQUESTED } =
    useLocalization()

  useEffect(() => {
    // Init the language
    dispatch({
      type: LOCALIZATION_SET_LANGUAGE_REQUESTED,
      payload: localizationLanguage
    })

    // eslint-disable-next-line
  }, [])

  /**
   * @description Render routes
   *
   * @param {object} route
   * @param {number} index
   *
   * @return {any} any
   */
  const renderRoutes = (route = {}, index) => {
    if (route?.children?.length !== 0) {
      return (
        <Route
          path={route.path}
          element={<route.element {...route.meta} />}
          key={index}
        >
          {route?.children?.map((childrenRoute, childrenIndex) => {
            // Check if route is nested, do recursive
            if (childrenRoute?.children?.length !== 0) {
              return renderRoutes(childrenRoute, childrenIndex)
            } else {
              return (
                <Route
                  path={childrenRoute.path}
                  element={<childrenRoute.element {...childrenRoute.meta} />}
                  key={childrenIndex}
                />
              )
            }
          })}
        </Route>
      )
    } else {
      return (
        <Route
          path={route.path}
          element={<route.element {...route.meta} />}
          key={index}
        />
      )
    }
  }

  return (
    <Suspense fallback={<>Loading...</>}>
      {/* Styles */}
      <GlobalStyle />

      {/* Routes */}
      <Router>
        <Routes>
          {routes.map((route, index) => renderRoutes(route, index))}
        </Routes>
      </Router>
    </Suspense>
  )
}

export { EntryPoint }
