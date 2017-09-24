import React from "react"
import Container from "../components/Container.js"
import Link from "gatsby-link"
export default ({ data }) => {

  const post = data.markdownRemark

  return (
    <Container>
      <h1>
        {post.frontmatter.title}
      </h1>
      <h6>{post.frontmatter.date}</h6>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/mixes">back</Link>
    </Container>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(
          formatString: ""
          fromNow: true
          difference:"today")
      }
    }
  }
`