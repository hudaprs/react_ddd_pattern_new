// Redux persists
import { persistReducer } from 'redux-persist'

// Utils
import { reduxUtilsPersistConfig } from 'modules/app/utils/redux.utils'

// Action
import { LOCALIZATION_SET_LOADING, LOCALIZATION_SET_LANGUAGE } from '../action'

// Constant
import { LOCAL_STORAGE_PERSISTED_LOCALIZATION } from 'modules/app/constant'

const initialState = {
  localizationIsLoading: false,
  localizationLanguage: 'en'
}

const localization = persistReducer(
  reduxUtilsPersistConfig(LOCAL_STORAGE_PERSISTED_LOCALIZATION, [
    'localizationLanguage'
  ]),
  (state = initialState, { type, payload }) => {
    switch (type) {
      case LOCALIZATION_SET_LOADING:
        return {
          ...state,
          localizationIsLoading: payload
        }
      case LOCALIZATION_SET_LANGUAGE:
        return {
          ...state,
          localizationLanguage: payload
        }
      default:
        return state
    }
  }
)

export { localization }
