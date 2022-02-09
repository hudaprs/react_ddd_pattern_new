// Redux persists
import { persistReducer } from 'redux-persist'

// Utils
import { reduxUtilsPersistConfig } from 'modules/core/utils/redux.utils'

// Action
import { AUTH_SET_LOADING } from '../action'

// Constant
import { LOCAL_STORAGE_PERSISTED_AUTH } from 'modules/core/constant'

const initialState = {
  auth_loading: false,
  auth_token: '',
  auth_authenticatedUser: {}
}

const auth = persistReducer(
  reduxUtilsPersistConfig(LOCAL_STORAGE_PERSISTED_AUTH, [
    'auth_token',
    'auth_authenticatedUser'
  ]),
  (state = initialState, { type, payload }) => {
    switch (type) {
      case AUTH_SET_LOADING:
        return {
          ...state,
          auth_loading: payload
        }
      default:
        return state
    }
  }
)

export { auth }
