import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    // empty tag = react fragments
    <> 
        <Navbar/>
            {children}
        <Footer/>
    </>

  )
}

export default Layout