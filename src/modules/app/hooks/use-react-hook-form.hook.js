// React Hook Form
import { useController } from 'react-hook-form'

const useReactHookForm = ({ formName, control }) => {
  const {
    field: { onChange, onBlur, value, ref, name },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields, errors }
  } = useController({
    name: formName,
    control
  })

  return {
    onChange,
    onBlur,
    value,
    ref,
    name,
    isDirty,
    invalid,
    isTouched,
    touchedFields,
    dirtyFields,
    error,
    errors
  }
}

export { useReactHookForm }
