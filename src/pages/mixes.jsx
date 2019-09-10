import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/Container'

const StyledContainer = styled(Container)`
  padding: 20px 20px;
  margin: 1.6rem 1.2rem;
  max-width: 600px;
`
const StyledLink = styled(Link)`
  margin: 0;
  text-decoration: none;
`
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

export default ({ data }) => (
  <StyledContainer>
    <Title>recordings</Title>
    <Count>
      {data.allMarkdownRemark.totalCount}
      {' '}
mixes
    </Count>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Mix id={node.id}>
        <StyledLink to={node.fields.slug}>
          <StyledTitle>{node.frontmatter.title}</StyledTitle>
        </StyledLink>
        <StyledTags>
          {node.frontmatter.tags.map(tag => `#${tag} `)}
        </StyledTags>
      </Mix>
    ))}

  </StyledContainer>
)

export const query = graphql`
  query {
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
