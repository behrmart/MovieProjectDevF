import { useState } from 'react'
import './navbar.scss'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand">Movie Project Dev.F</a>
        
        </div>
    </nav>
    </>
  )
}

export default Navbar
