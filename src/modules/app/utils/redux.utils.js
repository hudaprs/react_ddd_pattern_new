// Redux persists
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

/**
 * @description Default config for persisting store
 *
 * @param {string} key
 * @param {string[]} whitelist
 *
 * @return {{storage, whitelist: string[], key: string}}
 */
/* eslint-disable camelcase */
export const reduxUtilsPersistConfig = (key, whitelist) => {
  return {
    key,
    storage,
    whitelist
  }
}
