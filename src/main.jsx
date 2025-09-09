import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/aboutme",
    element: <AboutMe />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
