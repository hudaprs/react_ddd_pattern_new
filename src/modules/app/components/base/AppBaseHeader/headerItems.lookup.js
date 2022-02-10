// Constant
import { AUTH_MODULE, AUTH_URL } from 'modules/app/constant'

const AUTH = [
  {
    title: 'auth.login.login',
    module: AUTH_MODULE,
    route: AUTH_URL.LOGIN
  }
]

export const headerItems = [...AUTH]
