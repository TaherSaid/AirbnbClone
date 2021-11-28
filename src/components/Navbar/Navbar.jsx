import React from "react"
import Search from "./Search"
import styled from "styled-components"
import NavigationBar from "./NavigationBar"

import Logo from "../../images/Logo.png"

const Menu = [
  { title: "Become a Host", href: "#" },
  { title: "Help", href: "#" },
  { title: "Sign Up", href: "#" },
  { title: "Log In", href: "#" },
]
const Navbar = () => {
  return (
    <Container>
      <div>
        <Left>
          <img src={Logo} alt="Airbnb" />
          <Search />
        </Left>
        <Right>
          <ul>
            {Menu.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </Right>
      </div>
      <NavigationBar />
    </Container>
  )
}

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  > div {
    display: flex;
    justify-content: space-between;
  }
`
const Left = styled.div`
  display: flex;
  padding: 1rem 0 1rem 1rem;
  > img {
    width: 1.875rem;
    height: 1.884rem;
    padding: 0.2rem 1rem 0 1rem;
  }
`
const Right = styled.div`
  display: flex;
  flex-shrink: 0;
  > ul {
    display: flex;
    list-style: none;
    padding: 1rem 1rem 1rem 0;
    > li {
      color: #484848;
      font-size: 14px;
      padding-right: 1rem;
      margin-right: 1rem;
      border-radius: 0.3rem;
      display: flex;
      align-items: center;
      > a {
        font-family: Sanfrancisco;
        text-decoration: none;
        color: #484848;
        text-align: center;
        padding: 0.2rem;
      }
    }
  }
`
export default Navbar
