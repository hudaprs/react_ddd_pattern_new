// Redux persists
import { persistReducer } from 'redux-persist'

// Utils
import { reduxUtilsPersistConfig } from 'modules/app/utils'

// Action
import { AUTH_SET_LOADING } from '../action'

// Constant
import { LOCAL_STORAGE_PERSISTED_AUTH } from 'modules/app/constant'

const initialState = {
  authIsLoading: false,
  authToken: '',
  authAuthenticatedUser: {}
}

const auth = persistReducer(
  reduxUtilsPersistConfig(LOCAL_STORAGE_PERSISTED_AUTH, [
    'authToken',
    'authAuthenticatedUser'
  ]),
  (state = initialState, { type, payload }) => {
    switch (type) {
      case AUTH_SET_LOADING:
        return {
          ...state,
          authIsLoading: payload
        }
      default:
        return state
    }
  }
)

export { auth }
