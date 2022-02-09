// React
import { Suspense } from 'react'

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Plugins
import { routes } from 'plugins'

// Styles
import { GlobalStyle } from './styles'

const EntryPoint = () => {
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
