import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import PaginaLogin from './pages/PaginaLogin'
import PaginaHome from './pages/PaginaHome'
import Rotas from './Rotas'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Rotas />
    </BrowserRouter>
  </React.StrictMode>,
)