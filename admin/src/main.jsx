import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdmincontextProvider from './context/Admincontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <AdmincontextProvider>
   <App />
   </AdmincontextProvider>
   </BrowserRouter>
  </StrictMode>,
)
