// React Redux
import { useSelector } from 'react-redux'

// Actions
import { LOCALIZATION_SET_LANGUAGE_REQUESTED } from 'modules/localization/redux/action'

const useLocalization = () => {
  return {
    ...useSelector(({ localization }) => localization),
    LOCALIZATION_SET_LANGUAGE_REQUESTED
  }
}

export { useLocalization }
