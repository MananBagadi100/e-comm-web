import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/context_pro.jsx'
import { CartProvider } from './context/CartContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
    </CartProvider>
  </StrictMode>,
)
