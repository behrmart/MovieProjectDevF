import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Body from './components/body/body.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Body />
    <Footer />
  </React.StrictMode>,
)
