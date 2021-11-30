import React from "react"
import Card from "../Card/Card"
import styled from "styled-components"

const Section = ({ title, content }) => {
  return (
    <Container>
      <h2>{title}</h2>
      <div>
        {content.map(
          ({ id, description, price, rating, tag, title, image }, index) => (
            <Card
              key={id + index}
              price={price}
              decription={description}
              tag={tag}
              rating={rating}
              title={title}
              imageCard={image}
            />
          )
        )}
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 5rem;
  > h2 {
    font-family: Sanfrancisco;
    font-weight: 500;
    font-size: 28px;
    color: #484848;
    margin-bottom: 2rem;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export default Section
