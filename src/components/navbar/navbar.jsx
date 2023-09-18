import { useState } from 'react'
import { NavLink } from 'react-router-dom'; // use NavLink from router to route...
import './navbar.scss'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <nav className="navbar bg-primary-subtle">
        <div className="container-fluid">
        <a className="navbar-brand">Proyecto IMDB</a>
        <NavLink to="/independientes">Independientes</NavLink>
        <NavLink to="/comedia">Comedia</NavLink>
        {/* <NavLink to="/fortune">Fortune!</NavLink> */}
        <span className="navbar-text">
          <span className="text-primary-emphasis">Dev.F</span> <span className='text-warning-emphasis'>Kata FrontEnd</span>
        </span>
        </div>
    </nav>
    </>
  )
}

export default Navbar
