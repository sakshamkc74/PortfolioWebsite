import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser'
import App from './App'
import './index.css'

// Initialize EmailJS
emailjs.init({
  publicKey: "ov9kTwusFdsoxTnHL",
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
