// Redux Saga - Effects
import { put, call, takeLatest, delay } from 'redux-saga/effects'

// Actions
import {
  AUTH_LOGIN,
  AUTH_LOGIN_REQUESTED,
  AUTH_LOGOUT,
  AUTH_LOGOUT_REQUESTED,
  AUTH_SET_LOADING
} from '../action'

// Api
import * as api from '../api'

/**
 * @description Login an user
 *
 * @param {object} payload
 *
 * @returns {Generator<*, void, *>}
 */
const authLogin = function* ({ payload }) {
  yield put({ type: AUTH_SET_LOADING, payload: true })

  const response = yield call(api.authLogin, payload)

  yield delay(1000)

  if (response.ok) {
    const {
      token: authToken,
      refreshToken: authRefreshToken,
      user: authAuthenticatedUser
    } = response.res

    yield put({
      type: AUTH_LOGIN,
      payload: {
        authToken,
        authRefreshToken,
        authAuthenticatedUser
      }
    })

    // Do when response success
    if (payload?.onSuccess) {
      yield call(payload.onSuccess)
    }
  }

  if (!response.ok) {
    // Do when response failed
    if (payload?.onError) {
      yield call(payload.onError)
    }
  }

  yield put({ type: AUTH_SET_LOADING, payload: false })
}

/**
 * @description Log user out
 *
 * @returns {Generator<*, void, *>}
 */
const authLogout = function* ({ payload }) {
  yield put({ type: AUTH_SET_LOADING, payload: true })

  const response = yield call(api.authLogout)

  if (response.ok) {
    yield put({ type: AUTH_LOGOUT })

    // Do when response success
    if (payload?.onSuccess) {
      yield call(payload.onSuccess)
    }
  }

  if (!response.ok) {
    // Do when response failed
    if (payload?.onError) {
      yield call(payload.onError)
    }
  }

  yield put({ type: AUTH_SET_LOADING, payload: false })
}

const authSaga = function* () {
  yield takeLatest(AUTH_LOGIN_REQUESTED, authLogin)
  yield takeLatest(AUTH_LOGOUT_REQUESTED, authLogout)
}

export { authSaga }
