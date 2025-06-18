import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home_tem from './pages/Home_tem.jsx'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home_tem />
  },
  {
    path: "/produtos",
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
