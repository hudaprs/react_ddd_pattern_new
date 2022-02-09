// React
import { createStore, applyMiddleware } from 'redux'

// Redux Devtools
import { composeWithDevTools } from 'redux-devtools-extension'

// Root Reducers
import { rootReducers } from './reducers'

// Redux Saga
import createSagaMiddleware from 'redux-saga'

// Root Saga
import { rootSagas } from './sagas'

// Redux Persist
import { persistStore } from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const initialState = {}

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
const persistor = persistStore(store)

sagaMiddleware.run(rootSagas)

export { store, persistor }
