// src/main.tsx - CORRECTED VERSION
import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import AppRouter from './components/Router'  // Direct import

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />  {/* No extra BrowserRouter here */}
  </React.StrictMode>,
)