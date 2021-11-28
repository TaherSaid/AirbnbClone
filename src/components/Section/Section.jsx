import React from "react"
import styled from "styled-components"
import Card from "../Card/Card"
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
  }
`

export default Section
