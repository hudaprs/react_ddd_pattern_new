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

// Custom Hook
import { useAuth } from 'modules/auth/hooks'
import { useRequestSaver } from 'modules/app/hooks'

// Constant
import { REQUEST_AUTH_LOGIN } from 'modules/auth/constant'
import { APP_URL } from 'modules/app/constant'

// React Router DOM
import { useNavigate } from 'react-router-dom'

// Schema For Form Validation
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required()
})

const AuthLoginUI = () => {
  // Hook
  const { authIsLoading, authLogin } = useAuth()
  const { requestSaverSetCancelToken } = useRequestSaver()
  const { t } = useTranslation()
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    mode: 'all'
  })
  const navigate = useNavigate()

  /**
   * @description Handle submit
   *
   * @return {Promise<void>} Promise<void>
   */
  const onSubmit = useCallback(async (form) => {
    await authLogin({
      body: form,
      requestConfig: { ...requestSaverSetCancelToken(REQUEST_AUTH_LOGIN) }
    })

    navigate(APP_URL.INDEX, { replace: true })
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

      <button type={'submit'} disabled={authIsLoading}>
        {t('auth.login.login')}
      </button>
    </form>
  )
}

export { AuthLoginUI }
