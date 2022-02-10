// React
import { useEffect, useRef } from 'react'

// Axios
import axios from 'axios'

const useRequestSaver = () => {
  // Hook
  const requests = useRef([])

  // Cancel all request when leaving page
  useEffect(() => {
    return () => {
      if (requests.current.length !== 0) {
        // eslint-disable-next-line
        requests.current.forEach((request) => {
          requestSaverCancel(request.id)
        })
      }
    }

    // eslint-disable-next-line
  }, [])

  /**
   * @description Set cancel token
   *
   * @param {string} id
   * @param {number} anotherId
   *
   * @return {object} { cancelToken: string }
   */
  const requestSaverSetCancelToken = (id, anotherId) => {
    const axiosSource = axios.CancelToken.source()

    // Remove previous request if there's another new request
    const matchedRequest = requests.current.find((request) => {
      if (anotherId) {
        return request?.anotherId === anotherId
      } else {
        return request.id === id
      }
    })

    if (matchedRequest) {
      // Cancel request if exists
      matchedRequest.cancel()

      requests.current = requests.current.filter((request) => {
        if (anotherId) {
          return request?.anotherId === anotherId
        } else {
          return request.id !== id
        }
      })
    } else {
      // Push another cancel token
      requests.current = [
        ...requests.current,
        { cancel: axiosSource.cancel, id, anotherId }
      ]
    }

    return { cancelToken: axiosSource.token }
  }

  /**
   * @description Cancel some request
   *
   * @param {string} id
   * @param {number} anotherId
   *
   * @return {void} void
   */
  const requestSaverCancel = (id, anotherId) => {
    // Find the correct request match the id and cancel it
    const findCorrectRequest = requests.current.find((request) => {
      if (anotherId) {
        return request?.anotherId === anotherId
      } else {
        return request.id === id
      }
    })

    if (findCorrectRequest) {
      // Cancel the request
      findCorrectRequest.cancel()

      // Remove the previous cancel token if axios already canceled
      requestSaverClearOldRequest(findCorrectRequest.id)
    }
  }

  /**
   * @description Clear previous request
   *
   * @param {string} id
   *
   * @return {void} void
   */
  const requestSaverClearOldRequest = (id) => {
    requests.current = requests.current.filter((request) => request.id !== id)
  }

  return { requests, requestSaverSetCancelToken, requestSaverCancel }
}

export { useRequestSaver }
