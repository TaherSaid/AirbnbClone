import React from "react"
import styled from "styled-components"
import { devices } from "../../BreakPoint"

import Logo from "../../images/Logo.png"
import facebook from "../../images/facebook.svg"
import twitter from "../../images/twitter.svg"
import instagram from "../../images/instagram.svg"

const data = {
  languages: ["English", "English"],
  sections: [
    {
      sectionTitle: "Airbnb",
      list: [
        {
          title: "Airbnb",
        },
        {
          title: "About us",
        },
        {
          title: "Careers",
        },
        {
          title: "Press",
        },
        {
          title: "Policies",
        },
        {
          title: "Help",
        },
        {
          title: "Diversity & Belonging",
        },
      ],
    },
    {
      sectionTitle: "Discover",
      list: [
        {
          title: "Trust & Safety",
        },
        {
          title: "About us",
        },
        {
          title: "Travel Credit",
        },
        {
          title: "Gift Cards",
        },
        {
          title: "Airbnb Citizen",
        },
        {
          title: "Business Travel",
        },
        {
          title: "Guidebooks",
        },
        {
          title: "Airbnbmag",
        },
      ],
    },
    {
      sectionTitle: "Hosting",
      list: [
        {
          title: "Why Host",
        },
        {
          title: "Hospitality",
        },
        {
          title: "Responsible Hosting",
        },
        {
          title: "CommunityCenter",
        },
      ],
    },
  ],
}

const Footer = () => {
  return (
    <Container>
      <Top>
        <Language>
          <select>
            {data?.languages?.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <select>
            {data?.languages?.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </Language>
        {data?.sections?.map(({ sectionTitle, list }, index) => (
          <Section key={index}>
            <h4>{sectionTitle}</h4>
            {list.map(({ title }, index) => (
              <h5 key={index}>{title}</h5>
            ))}
          </Section>
        ))}
      </Top>

      <Bottom>
        <div>
          <img src={Logo} />
          <span>Airbnb, Inc.</span>
        </div>
        <TermPrivacy>
          <TermContainer>
            <span>Terms</span>
            <span>Privacy</span>
            <span>Site Map</span>
          </TermContainer>
          <span>
            <img className="facebookIcon" src={facebook} />
          </span>
          <span>
            <img className="twitterIcon" src={twitter} />
          </span>
          <span>
            <img className="instagramIcon" src={instagram} />
          </span>
        </TermPrivacy>
      </Bottom>
    </Container>
  )
}

const Container = styled.footer`
  position: absolute;
  width: 80%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0%);
`

const Top = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1rem;

  @media ${devices.tablet} {
    gap: 1rem;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    margin-top: 1rem;
  }
`

const Language = styled.div`
  display: flex;
  flex-direction: column;
  > select {
    font-family: Sanfrancisco;
    border: 1px solid #dbdbdb;
    margin-top: 1rem;
    width: 15.37rem;
    height: 2.87rem;
    font-size: 19px;
  }
  @media ${devices.tablet} {
    > select {
      margin-top: 1rem;
      width: 100%;
    }
  }
`

const Section = styled.div`
  > h4 {
    font-family: Sanfrancisco;
  }
  > h5 {
    font-family: Sanfrancisco;
    font-size: 15px;
    font-weight: 300;
    color: #484848;
    margin: 0;
  }
`

const Bottom = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  > div:first-of-type {
    display: flex;
  }
  > div:first-of-type > img {
    margin-right: 1rem;
    filter: grayscale(100%);
  }
  > div:first-of-type > span {
    font-family: Sanfrancisco;
    color: #767676;
    font-size: 15px;
  }
`
const TermPrivacy = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  > span {
    color: #767676;
    font-size: 15px;
  }
`

const TermContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  gap:1rem;

 
}
`

export default Footer
