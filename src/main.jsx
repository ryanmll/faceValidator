import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx'
import LandingPage from './Landing page/LandingPage.jsx'
import Produtos from './routes/produtos.jsx'
import Suporte from './routes/suporte.jsx'
import Login from './components/login/Login.jsx'
import Principal from './Pagina Principal/Principal.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <LandingPage/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },
      {
        path: "/suporte",
        element: <Suporte/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/",
        element: <LandingPage/>
      },
      {
        path: "/principal",
        element: <Principal/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
