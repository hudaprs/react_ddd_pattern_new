// React Lazily
import { lazily } from 'react-lazily'

// Constant
import { AUTH_URL, LAYOUT } from 'modules/app/constant'

// Components
import { AppBaseWrapper } from 'modules/app/components/base'

// UI
const { AuthLoginUI } = lazily(() => import('modules/auth/ui'))

const authRoutes = [
  {
    path: AUTH_URL.INDEX,
    element: AppBaseWrapper,
    meta: { layout: LAYOUT.DEFAULT },
    children: [
      {
        path: AUTH_URL.LOGIN,
        element: AuthLoginUI,
        meta: { requireAuth: false }
      }
    ]
  }
]

export { authRoutes }
