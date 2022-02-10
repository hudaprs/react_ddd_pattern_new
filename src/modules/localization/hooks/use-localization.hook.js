// React
import { useCallback } from 'react'

// React Redux
import { useSelector, useDispatch } from 'react-redux'

// Actions
import { LOCALIZATION_SET_LANGUAGE_REQUESTED } from 'modules/localization/redux/action'

const useLocalization = () => {
  // Hook
  const dispatch = useDispatch()
  const localizationLanguage = useSelector(
    ({ localization }) => localization.localizationLanguage
  )

  /**
   * @description Set language
   *
   * @param {string} language
   *
   * @return {void} void
   */
  const localizationSetLanguage = useCallback((language) => {
    dispatch({ type: LOCALIZATION_SET_LANGUAGE_REQUESTED, payload: language })
  }, [])

  return {
    localizationLanguage,
    localizationSetLanguage
  }
}

export { useLocalization }
