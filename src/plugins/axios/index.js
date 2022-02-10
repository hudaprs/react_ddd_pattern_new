// Axios
import defaultAxios from 'axios'

const config = {
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost',
  timeout: 10000
}

const axios = defaultAxios.create(config)

/**
 * @description Handle response from server
 *
 * @param {object} res
 *
 * @return {object} object
 */
const handleResponse = (res) => {
  // Check if client get error request from server
  if (res && res?.response?.status >= 400) {
    const { data, config } = res.response
    const response = {
      ok: false,
      res: data,
      config,
      message: data?.message || res?.message
    }

    /** @note logging for development only */
    if (process.env.NODE_ENV === 'development') {
      console.error(response, 'AXIOS ERROR')
    }

    return response
  } else if (
    // Otherwise return the response according to server
    res &&
    res?.status >= 200 &&
    res?.status < 300
  ) {
    const { data, config } = res

    const response = {
      ok: true,
      res: data,
      config,
      message: data?.message || res?.statusText
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(response, 'AXIOS OK')
    }

    return response
  } else {
    // Check if there's no response, just return the plain object
    const { config } = res
    const response = {
      ok: false,
      res,
      config,
      message: res?.message || res?.code
    }

    /** @note logging for development only */
    if (process.env.NODE_ENV === 'development') {
      console.error(response, 'AXIOS FAILED')
    }

    return response
  }
}

axios.interceptors.request.use(
  async (set) => {
    // Check if user is authenticated, then assign headers for authorization
    /** @todo open this if accept multiple language in the app, discuss with server or backend */
    // set.headers!['Accept-Language'] = localization.localization_lang

    return set
  },
  (error) => handleResponse(error)
)

axios.interceptors.response.use(
  (response) => {
    return handleResponse(response)
  },
  async (error) => {
    if (defaultAxios?.isCancel(error)) {
      /** @note logging for development only */
      if (process.env.NODE_ENV === 'development') console.warn('CANCELED')

      return error
    } else {
      return handleResponse(error)
    }
  }
)

export { axios }
