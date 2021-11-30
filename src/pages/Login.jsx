import React from "react"
import styled from "styled-components"
import { devices } from "../BreakPoint"

import Facebook from "../images/facebook-icon.svg"
import google from "../images/google-icon.svg"
import apple from "../images/apple-icon.svg"
import mail from "../images/mail-icon.svg"
import SimpleNavbar from "../components/Navbar/SimpleNavbar"

const LoginMethod = [
  { icon: Facebook, title: "Continue with Facebook", alt: "facebbok" },
  { icon: google, title: "Continue with Google", alt: "google" },
  { icon: apple, title: "Continue with Apple", alt: "apple" },
  { icon: mail, title: "Continue with email", alt: "mail" },
]

const Login = () => {
  return (
    <div>
      <SimpleNavbar />
      <Container>
        <h2>Log in or sign up</h2>
        <span>Welcom to Airbnb</span>
        <PhoneField>
          <div>
            <label for="Country">Country/Region</label>
            <select id="Country">
              <option>united State (+1)</option>
            </select>
          </div>

          <div>
            <label for="phone">Phone number</label>
            <input type="tel" id="phone" />
          </div>
        </PhoneField>
        <PrivacyPolicy>
          We’ll call or text you to confirm your number. Standard message and
          data rates apply. <span>Privacy Policy</span>
        </PrivacyPolicy>
        <button>Continue</button>
        <div>or</div>
        <LogWithOther>
          {LoginMethod.map(({ icon, title, alt }) => (
            <button key={alt}>
              <img src={icon} alt={alt} />
              <p>{title}</p>
            </button>
          ))}
        </LogWithOther>
      </Container>
    </div>
  )
}

const LogWithOther = styled.div`
  width: 80%;
  button {
    background: none;
    border: 1px solid #787878;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 1rem;
    > img {
      width: 25px;
    }
    > p {
      flex: 1;
      align-self: center;
    }
  }
`
const PrivacyPolicy = styled.p`
  font-family: Sanfrancisco;
  margin: 0.5rem 0 1.4rem 1rem;
  font-weight: 500;
  font-size: 0.7rem;
  max-width: 80%;
  span {
    text-decoration: underline;
    font-weight: bold;
  }
`

const PhoneField = styled.div`
  border: 0.1rem solid #717171;
  width: 80%;
  border-radius: 0.6rem;

  > div {
    display: flex;
    flex-direction: column;
    > label {
      font-family: Sanfrancisco;
      font-size: 1rem;
      font-weight: 500;
      margin: 0.4rem 0 0 0.4rem;
      color: #4848482e;
    }
    > select {
      font-family: Sanfrancisco;
      margin: 0.4rem 0 0.4rem 0;
      padding-left: 0.2rem;
      border: none;
      font-size: 1rem;
      border-bottom: 0.0057rem solid #717171;
    }
    > input {
      font-family: Sanfrancisco;
      border: none;
      margin: 0.4rem 0 0 0.4rem;
      width: 80%;
    }
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #484848;
  border-radius: 0.5rem;
  > h2 {
    font-size: 1.2rem;
    font-family: Sanfrancisco;
    font-weight: 800;
    width: 100%;
    margin: 1rem;
    text-align: center;
  }
  > span {
    font-family: Sanfrancisco;
    margin: 0 0 1.4rem 3rem;
    font-size: 1.5rem;
    font-weight: 700;
    align-self: flex-start;
  }
  > button {
    width: 80%;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    padding: 0.8rem;
    background-color: #de1261;
    border: none;
    border-radius: 0.5rem;
  }
  @media ${devices.mobileL} {
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
  }
`

export default Login
