import React, { useState } from "react"
import Search from "./Search"
import styled from "styled-components"
import NavigationBar from "./NavigationBar"
import { devices } from "../../BreakPoint"

import Logo from "../../images/Logo.png"
import MenuIcon from "../../images/menu.svg"
import ClocseIcon from "../../images/delete.svg"

const MenuContent = [
  { title: "Become a Host", href: "#" },
  { title: "Help", href: "#" },
  { title: "Sign Up", href: "#" },
  { title: "Log In", href: "#" },
]
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)
  const closeMobileMenu = () => setIsOpen(false)

  return (
    <Nav>
      <Left>
        <img src={Logo} alt="Airbnb" />
        <Search />
      </Left>
      <Hamburger onClick={handleClick}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {MenuContent.map((item, index) => (
          <MenuLink key={index} href={item.href}>
            {item.title}
          </MenuLink>
        ))}
      </Menu>
    </Nav>
  )
}
const MenuLink = styled.a`
  padding: 1rem 1rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #484848;
  transition: all 0.3s ease-in;
  font-size: 14px;
  &:hover {
    color: #7b7fda;
  }
`

const Nav = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px;
`

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media ${devices.tablet} {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media ${devices.tablet} {
    display: flex;
  }
`

const Left = styled.div`
  display: flex;
  padding: 1rem 0 1rem 0.5rem;
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

export default Navbar
