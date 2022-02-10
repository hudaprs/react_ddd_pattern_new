// Prop Types
import PropTypes from 'prop-types'

// Custom Hook
import { useAuth } from 'modules/auth/hooks'

// React Router Dom
import { Navigate, useLocation } from 'react-router-dom'

// Constant
import { AUTH_URL } from 'modules/app/constant'

const GuardRequireAuth = ({ children }) => {
  // Hook
  const location = useLocation()
  const { authIsAuthenticated } = useAuth()

  // Check if user not authenticated
  if (!authIsAuthenticated && location.pathname !== AUTH_URL.LOGIN) {
    return <Navigate to={AUTH_URL.LOGIN} replace state={{ from: location }} />
  }

  return children
}

GuardRequireAuth.propTypes = {
  children: PropTypes.node
}

export { GuardRequireAuth }
