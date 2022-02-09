// Redux Saga - Effects
import { spawn } from 'redux-saga/effects'

/**
 * @description Get all sagas inside modules folder
 *
 * @return {object} object of all reducers inside modules folder
 */
const loadSagas = () => {
  const context = require.context('modules', true, /saga.js$/i)

  const sagas = context
    .keys()
    .map((key) => ({ key, name: key.match(/([a-z_]+)\.saga.js$/i)[1] }))
    .reduce((sagas, { key, name }) => {
      return {
        ...sagas,
        [name]: context(key)[`${name}Saga`]
      }
    }, {})

  return sagas
}

const rootSagas = function* () {
  // eslint-disable-next-line
  for (const [_, value] of Object.entries(loadSagas())) {
    yield spawn(value)
  }
}

export { rootSagas }
