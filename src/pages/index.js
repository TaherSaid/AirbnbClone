import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Section from "../components/Section/Section"


const IndexPage = ({ data }) => {
  const { nodes } = data.allContentfulSection
  return (
    <Layout>
      {nodes.map(item => (
        <Section key={item.id} title={item.title} content={item.list} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulSection {
      nodes {
        title
        id: contentful_id
        list {
          description
          id: contentful_id
          price
          rating
          image {
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
  }
`

export default IndexPage
