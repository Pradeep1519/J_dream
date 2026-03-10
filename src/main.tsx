// src/main.tsx - CORRECTED VERSION
import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import AppRouter from './components/Router'  // Direct import
import {Analytics} from '@vercel/analytics/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />  {/* No extra BrowserRouter here */}
    <Analytics />
  </React.StrictMode>,
)