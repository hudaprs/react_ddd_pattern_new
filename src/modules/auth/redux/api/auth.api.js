// Constant
import { AUTH_AUTHENTICATED_USER, AUTH_LOGOUT } from 'modules/auth/constant'

/**
 * @description Log user in
 *
 * @param {{email: string, password: string}} payload
 *
 * @return {Promise<any>} Promise<any>
 */
export const authLogin = async (payload) => {
  try {
    // const response = await axios.post('api://someUrl', payload.body, { ...payload.requestConfig })

    // Todo, change to api, this is just fake auth
    return Promise.resolve(AUTH_AUTHENTICATED_USER)
  } catch (err) {
    return Promise.reject(err)
  }
}

/**
 * @description log user out
 *
 * @return {Promise<any>} Promise<any>
 */
export const authLogout = async () => {
  try {
    // const response = await axios.get('api://someUrl')

    // Todo, change to api, this is just fake auth
    return Promise.resolve(AUTH_LOGOUT)
  } catch (err) {
    return Promise.reject(err)
  }
}
