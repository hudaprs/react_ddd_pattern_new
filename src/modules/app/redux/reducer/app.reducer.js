// Actions
import { APP_SET_LOADING } from '../action'

const initialState = {
  app_isLoading: false
}

const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_SET_LOADING:
      return {
        ...state,
        app_isLoading: payload
      }
    default:
      return state
  }
}

export { app }
