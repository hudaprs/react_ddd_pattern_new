import React from 'react'
import ReactDOM from 'react-dom'

// Components
import { EntryPoint } from 'modules/EntryPoint'

// React Redux
import { Provider } from 'react-redux'

// Store
import { store, persistor } from 'plugins'

// Redux Persist
import { PersistGate } from 'redux-persist/integration/react'

// i18n
import 'plugins/i18n'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading'} persistor={persistor}>
        <EntryPoint />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
