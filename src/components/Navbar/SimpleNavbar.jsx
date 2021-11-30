import React from "react"
import styled from "styled-components"
import { devices } from "../../BreakPoint"
import { Link } from "gatsby"

import Logo from "../../images/Logo.png"
const SimpleNavbar = () => {
  return (
    <Container>
      <Nav>
        <Left>
          <Link to="/">
            <img src={Logo} alt="Airbnb" />
          </Link>
        </Left>
      </Nav>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
`

const Left = styled.div`
  flex: 1;
  padding: 1rem 0 1rem 2rem;
  > img {
    width: 1.875rem;
    height: 1.884rem;
    padding: 0.2rem 1rem 0 1rem;
  }
  @media ${devices.laptop} {
    > div {
      display: none;
    }
  }
`
export default SimpleNavbar
