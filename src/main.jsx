import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.scss'
// import './global.scss'
import Organizacao from './views/Organização/Organizacao.jsx'
import Tarefas from './views/Tarefas/Tarefas.jsx'

const router = createBrowserRouter([
  {
    path: "/organizacao",
    element: <Organizacao />,
  },
  {
    path: "/tarefas",
    element: <Tarefas />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
