import React from "react"
import styled from "styled-components"
import { devices } from "../../BreakPoint"

const Navigation = [
  { title: "for you", href: "#" },
  { title: "home", href: "#" },
  { title: "experiences", href: "#" },
  { title: "place", href: "#" },
]

const NavigationBar = () => {
  return (
    <NavigationContainer>
      {Navigation.map((item, index) => (
        <a href={item.href} key={index}>
          {item.title}
        </a>
      ))}
    </NavigationContainer>
  )
}

const NavigationContainer = styled.div`
  display: flex;
  padding-top: 1rem;
  > a {
    font-family: Sanfrancisco;
    color: #484848;
    font-size: 16px;
    font-weight: 100;
    text-decoration: none;
    margin-left: 2rem;
    text-transform: uppercase;
    &:hover {
      border-bottom: 2px solid #00a799;
    }
    &:active {
      border-bottom: 2px solid #00a799;
      color: #00a799;
    }
    @media ${devices.mobileL} {
      margin-left: 0.8rem;
      font-size: 12px;
    }
  }

  @media ${devices.mobileL} {
    justify-content: center;
  }
`

export default NavigationBar
