// React Lazily
import { lazily } from 'react-lazily'

// Constant
import { APP_URL, LAYOUT } from 'modules/app/constant'

// Components
import { AppBaseWrapper } from 'modules/app/components/base'

// UI
const { AppUI } = lazily(() => import('modules/app/ui'))

const appRoutes = [
  {
    path: APP_URL.INDEX,
    element: AppBaseWrapper,
    meta: { layout: LAYOUT.DEFAULT },
    children: [
      {
        path: APP_URL.INDEX,
        element: AppUI,
        meta: { requireAuth: false }
      }
    ]
  }
]

export { appRoutes }
