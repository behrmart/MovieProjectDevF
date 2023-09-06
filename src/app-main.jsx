
import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Body from './components/body/body.jsx'
import Fortune from './components/fortune/fortune.jsx'


const AppMain = () => {

  return (
    <>
    <Navbar />
    <Outlet />
    {/* <Body />
    <Fortune />*/}
    <Footer /> 
    </>
  )
}

export default AppMain