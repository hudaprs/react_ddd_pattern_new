import React from 'react'
import ReactDOM from 'react-dom'

// Components
import { EntryPoint } from 'modules/EntryPoint'

// Router
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <EntryPoint />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
