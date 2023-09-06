
import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'



const AppMain = () => {

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer /> 
    </>
  )
}

export default AppMain