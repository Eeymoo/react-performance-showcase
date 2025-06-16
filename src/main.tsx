import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 移除全局 loading
const loading = document.getElementById('global-loading')
if (loading) {
  loading.parentNode?.removeChild(loading)
}
