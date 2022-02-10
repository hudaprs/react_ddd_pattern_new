// React Lazily
import { lazily } from 'react-lazily'

// Constant
import { AUTH_URL, LAYOUT } from 'modules/app/constant'

// Components
import {
  AppBaseWrapper,
  AppBaseWrapperEmpty
} from 'modules/app/components/base'

// UI
const { AuthLoginUI } = lazily(() => import('modules/auth/ui'))

const authRoutes = [
  {
    path: AUTH_URL.INDEX,
    element: AppBaseWrapperEmpty,
    children: [
      {
        path: AUTH_URL.LOGIN,
        element: AuthLoginUI,
        meta: {
          requireAuth: false,
          layout: LAYOUT.DEFAULT,
          layoutElement: AppBaseWrapper
        }
      }
    ]
  }
]

export { authRoutes }
