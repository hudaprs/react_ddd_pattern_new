// React
import { memo, useCallback } from 'react'

// Prop Types
import PropTypes from 'prop-types'

// Custom Hook
import { useReactHookForm } from 'modules/app/hooks'

// i18n
import { useTranslation } from 'react-i18next'

// Utils
import { commonUtilsCamelCaseToTitleCase } from 'modules/app/utils'

const FormInput = memo(({ name, control, ...rest }) => {
  // Hook
  const { t } = useTranslation()
  const {
    onChange,
    onBlur,
    value,
    ref,
    name: reactHookFormName,
    errors
  } = useReactHookForm({
    formName: name,
    control
  })

  /**
   * @description Map key value
   *
   * @return {any} any
   */
  const mapKeyValues = useCallback(() => {
    const mapErrors = {}

    if (errors) {
      for (const [key, value] of Object.entries(errors)) {
        mapErrors[key] = `${commonUtilsCamelCaseToTitleCase(key)} ${t(
          `app.validations.${value.type}`
        )}`
      }
    }

    return mapErrors
  }, [errors])

  return (
    <>
      <input
        onChange={onChange} // send value to hook form
        onBlur={onBlur} // notify when input is touched/blur
        value={value || ''} // input value
        name={reactHookFormName} // send down the input name
        ref={ref} // send input ref, so we can focus on input when error appear
        {...rest}
      />

      {/* Error Message */}
      {mapKeyValues()?.[name] && (
        <p className={'error'}>{mapKeyValues()[name]}</p>
      )}
    </>
  )
})

FormInput.displayName = 'FormInput'

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.any
}

export { FormInput }
