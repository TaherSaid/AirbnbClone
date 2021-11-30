import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import StarRatingComponent from "react-star-rating-component"
import styled from "styled-components"

const Card = ({ rating, price, decription, imageCard, title, tag }) => {
  return (
    <Container>
      <ImageContainer>
        <GatsbyImage image={getImage(imageCard)} alt={title} />
        {title && (
          <ImageContent>
            <button>{tag}</button>
            <h2>{title}</h2>
          </ImageContent>
        )}
      </ImageContainer>
      <Details>
        {price && <h3>${price}</h3>}
        <p>{decription}</p>
        {rating && (
          <StarRatingComponent
            name={title}
            value={rating}
            starColor="#00A799"
            emptyStarColor="#E4E4E4"
            editing={false}
          />
        )}
      </Details>
    </Container>
  )
}

const Container = styled.div`
  margin-left: 1rem;
`

const ImageContainer = styled.div`
  position: relative;
  > img {
    width: 100%;
    object-fit: cover;
  }
`

const ImageContent = styled.div`
  position: absolute;
  bottom: 0.7rem;
  left: 0.7rem;
  max-width: 60%;

  > h2 {
    font-family: Sanfrancisco;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 21px;
    color: white;
    margin: 0;
    padding: 0;
  }
  > button {
    border: 1px solid #70707088;
    background-color: white;
    font-size: 12px;
    font-weight: lighter;
    border-radius: 0.5rem;
    text-transform: uppercase;
    font-family: Sanfrancisco;
  }
`

const Details = styled.div`
  margin-top: 0.5rem;
  > h3 {
    font-family: Sanfrancisco;
    font-size: 15px;
    color: #484848;
    margin: 0;
  }
  > p {
    font-family: Sanfrancisco;
    margin: 0.2rem 0;
    max-width: fit-content;
  }
`

export default Card
