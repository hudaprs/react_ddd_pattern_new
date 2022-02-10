// React Lazily
import { lazily } from 'react-lazily'

// Constant
import { APP_URL, LAYOUT } from 'modules/app/constant'

// Components
import {
  AppBaseWrapper,
  AppBaseWrapperEmpty
} from 'modules/app/components/base'

// UI
const { AppUI } = lazily(() => import('modules/app/ui'))

const appRoutes = [
  {
    path: APP_URL.INDEX,
    element: AppBaseWrapperEmpty,
    children: [
      {
        path: APP_URL.INDEX,
        element: AppUI,
        meta: {
          requireAuth: false,
          layoutElement: AppBaseWrapper,
          layout: LAYOUT.DEFAULT
        }
      }
    ]
  }
]

export { appRoutes }
