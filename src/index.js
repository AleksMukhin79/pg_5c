import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import 'macro-css'
import testTable from './src/testTable.js'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)