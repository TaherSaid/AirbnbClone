import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"

import UpArrow from "../images/up-arrow.svg"

const BecomeHost = () => {
  return (
    <Layout>
      <Container>
        <span>Hosting</span>
        <span>makes Airbnb</span>
        <span>Airbnb</span>
        <button>Try hosting</button>
        <img src={UpArrow} alt="up-arrow" />
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  width: 100%;
  padding: 3rem;
  span {
    font-family: Sanfrancisco;
    font-size: 7rem;
    text-align: center;
    color: white;
  }
  button {
    font-size: 1.4rem;
    font-weight: 300;
    background-image: radial-gradient(
      #ff385c 32%,
      #e61e4d 52%,
      #e61e4d 43%,
      #d70467 57.5%,
      #bd1e59 67%
    );
    color: white;
    width: 10rem;
    height: fit-content;
    border: none;
    border-radius: 0.5rem;
    margin-top: 2rem;
    padding: 0.8rem;
  }
  > img {
    width: 30px;
    transform: rotate(180deg);
    margin-top: 2rem;
  }
`
export default BecomeHost
