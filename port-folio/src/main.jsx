import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import './index.css'
import App from './App'
import AOS from 'aos'
AOS.init({ duration: 700, once: true })


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
)