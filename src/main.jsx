import { StrictMode } from 'react'
import "react-alice-carousel/lib/alice-carousel.css"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CryptoProvider from './CryptoContext.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CryptoProvider>
    <App />
    </CryptoProvider>
  </StrictMode>,
)
