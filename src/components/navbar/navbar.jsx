import { useState } from 'react'
import './navbar.scss'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <nav className="navbar bg-primary-subtle">
        <div className="container-fluid">
        <a className="navbar-brand">Movie Project Dev.F</a>
        <span className="navbar-text">
          Kata FrontEnd por Bernardo F. Martínez Meave
        </span>
        </div>
    </nav>
    </>
  )
}

export default Navbar
