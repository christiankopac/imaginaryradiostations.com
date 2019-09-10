import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Container from '../components/Container'


const StyledContainer = styled(Container)`
  padding: 20px 20px;
  margin: 1.6rem 1.2rem;
  max-widht: 600px;
`

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post)
  return (
    <StyledContainer>
      <h1>
        {post.frontmatter.title}
      </h1>
      <h6>{post.frontmatter.date}</h6>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link href="/mixes" to="/mixes">back</Link>
    </StyledContainer>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        date(
          formatString: ""
          fromNow: true
          difference:"today")
      }
    }
  }
`
