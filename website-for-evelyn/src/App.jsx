import React from 'react'
import {createBrowserRouter, RouterProvider, Route, Link, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Requests from './pages/Requests'
import ErrorPage from './pages/ErrorPage'
import Policies from './pages/Policies'
import Socials from './pages/Socials'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,

  },
  {
    path: '/requests',
    element: <Requests />,
  },
  {
    path: '/policies',
    element: <Policies />,
  },
  {
    path: '/socials',
    element: <Socials />,
  },
  {
  path: '*',
  element: <ErrorPage />,
  }  
])

function App() {
  
  return (
    <div className='App'>

      <RouterProvider router = {router} />

    </div>
  )
}

export default App
