// Constant
import { AUTH_MODULE, AUTH_URL } from 'modules/app/constant'

const AUTH = [
  {
    title: 'Login',
    module: AUTH_MODULE,
    route: AUTH_URL.LOGIN
  }
]

export const headerItems = [...AUTH]
