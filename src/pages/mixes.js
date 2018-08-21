import React from "react"
import Link from "gatsby-link"
import Container from "../components/Container.js"
import styled from "styled-components"

const StyledContainer = styled(Container)`
  padding: 20px 20px;
  margin: 1.6rem 1.2rem;
  max-width: 600px;
`
const StyledLink = styled(Link)`
  margin: 0;
  text-decoration: none;
`;
const StyledTitle = styled.h3`
  margin: 0;
  margin-bottom: 0.3rem;
  cursor: pointer;
`
const Mix = styled.div`
  margin-bottom: 20px;
  border-bottom: .02rem solid #ccc;
  `
const Title = styled.h1`
  margin: 0;
`
const Count = styled.p`
  font-size: 0.9rem;
`
const StyledTags = styled.p`
  font-family: "Menlo Code", "Source Code Pro", monospace;
  font-size: 0.7rem;
`

export default ({ data }) => {
  return (
    <StyledContainer>
      <Title>recordings</Title>
      <Count>{data.allMarkdownRemark.totalCount} mixes</Count>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <Mix id={node.id}>
          <StyledLink to={node.fields.slug} >
              <StyledTitle>{node.frontmatter.title}</StyledTitle>
          </StyledLink>
          <StyledTags>
            {node.frontmatter.tags.map(function (tag) {
              return `#${tag} `
            })}
          </StyledTags>
        </Mix>
      )}

    </StyledContainer>

  )
}

export const query = graphql`
  query MixesQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          headings(depth:h6) {
            value
            depth
          }
          excerpt(pruneLength:9)
        }
      }
    }
  }
`