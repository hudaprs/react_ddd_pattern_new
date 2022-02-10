// React
import { useCallback, useMemo } from 'react'

// React Redux
import { useDispatch, useSelector } from 'react-redux'

// Actions
import {
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT_REQUESTED
} from 'modules/auth/redux/action'

// Lodash
import isEmpty from 'lodash.isempty'

const useAuth = () => {
  // Hook
  const dispatch = useDispatch()
  const authIsLoading = useSelector(({ auth }) => auth.authIsLoading)
  const authAuthenticatedUser = useSelector(
    ({ auth }) => auth.authAuthenticatedUser
  )
  const authToken = useSelector(({ auth }) => auth.authToken)
  const authRefreshToken = useSelector(({ auth }) => auth.authRefreshToken)
  const authIsAuthenticated = useMemo(() => {
    return (
      !isEmpty(authToken) &&
      !isEmpty(authRefreshToken) &&
      !isEmpty(authAuthenticatedUser)
    )
  }, [authToken, authRefreshToken, authAuthenticatedUser])

  /**
   * @description Log user in
   *
   * @param {object} payload
   *
   * @return {Promise<void>} Promise<void>
   */
  const authLogin = useCallback((payload) => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: AUTH_LOGIN_REQUESTED,
        payload: { ...payload, onSuccess: resolve, onError: reject }
      })
    })
  }, [])

  /**
   * @description Log user out
   *
   * @return {Promise<void>} Promise<void>
   */
  const authLogout = useCallback(async () => {
    return new Promise((resolve, reject) => {
      dispatch({
        type: AUTH_LOGOUT_REQUESTED,
        payload: { onSuccess: resolve, onError: reject }
      })
    })
  })

  return {
    authIsLoading,
    authAuthenticatedUser,
    authIsAuthenticated,
    authLogin,
    authLogout
  }
}

export { useAuth }
