// Redux
import { combineReducers } from 'redux'

/**
 * @description Get all reducers inside modules folder
 *
 * @return {object} object of all reducers inside modules folder
 */
const loadReducers = () => {
  const context = require.context('modules', true, /reducer.js$/i)

  const reducers = context
    .keys()
    .map((key) => ({ key, name: key.match(/([a-z_]+)\.reducer.js$/i)[1] }))
    .reduce((reducers, { key, name }) => {
      return {
        ...reducers,
        [name]: context(key)[name]
      }
    }, {})

  return reducers
}

const rootReducers = combineReducers(loadReducers())

export { rootReducers }
