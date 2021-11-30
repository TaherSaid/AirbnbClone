import * as React from "react"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
    <Container>
      {children}
    </Container>
     <Footer/>
    </>
  )
}

const Container=styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
 
`

export default Layout
