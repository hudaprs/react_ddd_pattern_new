// Redux persists
import { persistReducer } from 'redux-persist'

// Utils
import { reduxUtilsPersistConfig } from 'modules/app/utils'

// Action
import { AUTH_SET_LOADING, AUTH_LOGIN, AUTH_LOGOUT } from '../action'

// Constant
import { LOCAL_STORAGE_PERSISTED_AUTH } from 'modules/app/constant'

const initialState = {
  authIsLoading: false,
  authToken: '',
  authRefreshToken: '',
  authAuthenticatedUser: {}
}

const auth = persistReducer(
  reduxUtilsPersistConfig(LOCAL_STORAGE_PERSISTED_AUTH, [
    'authToken',
    'authRefreshToken',
    'authAuthenticatedUser'
  ]),
  (state = initialState, { type, payload }) => {
    switch (type) {
      case AUTH_SET_LOADING:
        return {
          ...state,
          authIsLoading: payload
        }
      case AUTH_LOGIN:
        return {
          ...state,
          ...payload
        }
      case AUTH_LOGOUT:
        return initialState
      default:
        return state
    }
  }
)

export { auth }
