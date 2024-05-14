import React from 'react'
import ReactDOM from 'react-dom/client'
import PaginaLogin from './pages/PaginaLogin'
import PaginaHome from './pages/PaginaHome'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <PaginaLogin />
  <PaginaHome/>
  </React.StrictMode>,
)
