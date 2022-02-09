// Redux Saga - Effects
import { put, call, takeLatest } from 'redux-saga/effects'

// Action
import {
  LOCALIZATION_SET_LANGUAGE,
  LOCALIZATION_SET_LANGUAGE_REQUESTED,
  LOCALIZATION_SET_LOADING
} from '../action'

// i18n
import i18n from 'i18next'

/**
 * @description Change language of the application
 *
 * @param {string} payload
 *
 * @return {any} any
 */
const localizationChangeLanguage = function* ({ payload }) {
  yield put({ type: LOCALIZATION_SET_LOADING, payload: true })

  // Set active language
  yield call(i18n.changeLanguage, payload)

  // Set the global language
  yield put({ type: LOCALIZATION_SET_LANGUAGE, payload })

  yield put({ type: LOCALIZATION_SET_LOADING, payload: false })
}

const localizationSaga = function* () {
  yield takeLatest(
    LOCALIZATION_SET_LANGUAGE_REQUESTED,
    localizationChangeLanguage
  )
}

export { localizationSaga }
