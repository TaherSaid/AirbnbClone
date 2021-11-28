import * as React from "react"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
    <main>
      {children}
    </main>
     <Footer/>
    </>
  )
}


export default Layout
