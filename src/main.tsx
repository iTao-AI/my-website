import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { getInitialTheme, setTheme } from './utils/theme'
import './index.css'
import App from './App.tsx'

// Apply theme immediately to avoid flash
const initial = getInitialTheme()
setTheme(initial)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
