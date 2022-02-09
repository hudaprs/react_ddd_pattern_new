// React
import { useCallback } from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// Components
import { FormInput } from 'modules/app/components/form'

// React Hook Form
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Yup
import * as yup from 'yup'

// Schema For Form Validation
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required()
  })
  .required()

const AuthLoginUI = () => {
  // Hook
  const { t } = useTranslation()
  const { handleSubmit, control } = useForm({ resolver: yupResolver(schema) })

  /**
   * @description Handle submit
   *
   * @return {void} void
   */
  const onSubmit = useCallback((form) => {
    console.log(form)

    // eslint-disable-next-line
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'form-group'}>
        <label htmlFor="email">{t('auth.login.form.email')}</label>
        <FormInput
          type={'email'}
          name={'email'}
          control={control}
          placeholder={t('auth.login.formPlaceholder.email')}
        />
      </div>
      <div className={'form-group'}>
        <label htmlFor="password">{t('auth.login.form.password')}</label>
        <FormInput
          type={'password'}
          name={'password'}
          control={control}
          placeholder={t('auth.login.formPlaceholder.password')}
        />
      </div>

      <button type={'submit'}>{t('auth.login.login')}</button>
    </form>
  )
}

export { AuthLoginUI }
