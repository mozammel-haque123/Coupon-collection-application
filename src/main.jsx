import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './component/Router/Router.jsx'
import AuthProvaider from './component/AuthProvaider/AuthProvaider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvaider>
<RouterProvider router={router}></RouterProvider>
  </AuthProvaider>
  </StrictMode>,
)
