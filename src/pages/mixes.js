import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

import { rhythm } from "../utils/typography"
import Container from "../components/Container.js"

export default ({ data }) => {
  return (
    <Container>
      <g.H1 display={"inline-block"} borderBottom={"1px solid"}>
        recordings of lost radio stations
      </g.H1>
      <h4>
        {data.allMarkdownRemark.totalCount} Mixes
      </h4>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div css={{ display: `flex` }}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit`, display: `flex`}}
          >
            <div css={{
              display: `flex`,
              flex: 2,
              flexDirection: `column`
            }}>
            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
            </g.H3>
            <p>
              {node.excerpt}
            </p>
            </div>
          </Link>
        </div>
      )}
     </Container>
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
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength:10)
        }
      }
    }
  }
`