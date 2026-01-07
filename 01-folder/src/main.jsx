// StrictMode React ka debugging tool hai.
// Ye extra checks lagata hai taaki bugs early detect ho jaaye.
// Production mein effect nahi karta, sirf development mein warnings deta hai.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( <App />  
)
