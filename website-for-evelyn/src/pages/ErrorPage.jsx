import React from 'react'
import { Link } from 'react-router-dom'


function ErrorPage() {
  return (
    <div>

      <h1>404 Error</h1>
      <p>Page not found</p>
      <Link to="/">Return to Home Page</Link>

      
    </div>
  )
}

export default ErrorPage