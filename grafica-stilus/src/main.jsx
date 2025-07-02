import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home_tem from './pages/Home_tem.jsx'
import Produtos from './pages/Produtos.jsx'
import Contato from './pages/Contato.jsx'
import Sobre from './pages/Sobre.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_tem />
  },
  {
    path: "/home",
    element: <Home_tem />
  },
  {
    path: "/produtos",
    element: <Produtos />
    
  },
  {
    path: "/sobre",
    element: < Sobre />
  },
  {
    path: "/contato",
    element: < Contato />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
