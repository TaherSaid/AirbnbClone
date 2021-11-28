import React from "react"
import styled from "styled-components"
import { devices } from "../../BreakPoint"

import guestIcon from "../../images/guest-Icon.svg"
import Anytime from "../../images/icon-calendar.svg"
import searchIcon from "../../images/search-Icon.svg"

const InputContent = [
  { placeholder: "Anywhere", img: searchIcon },
  { placeholder: "Anytime", img: Anytime },
  { placeholder: "1 guest", img: guestIcon },
]
const Search = () => {
  return (
    <>
      <Search1>
        {InputContent.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.placeholder} />
            <input type="text" placeholder={item.placeholder} />
          </div>
        ))}
      </Search1>
      <Search2>
        <button>
          <img src={searchIcon} alt="SearchIcon" />
          <span>Search</span>
        </button>
      </Search2>
    </>
  )
}

const Search1 = styled.div`
  display: flex;
  max-width: 527px;
  div {
    display: flex;
    align-items: baseline;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 1px;
    height: fit-content;
    flex: 1;
    > img {
      height: 16.8px;
      margin: 10px;
    }
    > input {
      border: none;
      margin-left: 5px;
      width: 71%;
    }
    @media ${devices.tablet} {
      display: none;
    }
  }
`
const Search2 = styled.div`
  display: none;
  > button {
    background: none;
    border: none;
    background-image: linear-gradient(to right, #ff5a5f, #ff5a60d2, #ff5a60bd);
    border-radius: 0.6rem;
    height: 2.5rem;
    padding: 8px;
    display: flex;
    gap: 1rem;
    > span {
      display: none;
      color: white;
      font-size: 18px;
      font-weight: 400;
    }
    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
    &:hover > span {
      display: block;
    }
  }
  @media ${devices.tablet} {
    display: block;
  }
`
export default Search
