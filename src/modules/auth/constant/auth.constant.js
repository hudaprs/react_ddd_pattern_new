// Constant
import { FAKE_RESPONSE } from 'modules/app/constant'

export const AUTH_AUTHENTICATED_USER = {
  ...FAKE_RESPONSE,
  res: {
    token: '123j12l3j13lkj',
    refreshToken: '12321o31l23j12093',
    user: {
      email: 'john@gmail.com',
      name: 'John Doe'
    }
  }
}

export const AUTH_LOGOUT = {
  ...FAKE_RESPONSE
}
