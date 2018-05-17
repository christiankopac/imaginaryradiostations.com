import React from "react"
import g from "glamorous"
import Link from "gatsby-link"

import { Card, Box, Columns, Container } from "bloomer"
import { CardHeader, CardHeaderIcon, CardHeaderTitle } from "bloomer"
import { Title, Subtitle, Icon, Content, Image } from "bloomer"
import { CardImage, CardContent } from "bloomer"
import { Media, MediaLeft, MediaContent } from "bloomer"

export default ({ data }) => {
  return (
    <Container>
      <g.H1>
        recordings
      </g.H1>
      <h4>
        {data.allMarkdownRemark.totalCount} Mixes
      </h4>
      <Box>A white box to contain other elements</Box>
<Columns>
      {data.allMarkdownRemark.edges.map(({ node }) =>

        <Card isSize='1/3'>
          <Link
            to={node.fields.slug}
          >
            <div>
            <g.H3>
              {node.frontmatter.title}{" "}
            </g.H3>
            <p>{node.excerpt}</p>
            </div>
            </Link>
            </Card>

        )}
      </Columns>
<Columns>
      <Card isSize='1/3'>
    <CardHeader>
        <CardHeaderTitle>
            Component
        </CardHeaderTitle>
        <CardHeaderIcon>
            <Icon className="fa fa-angle-down" />
        </CardHeaderIcon>
    </CardHeader>
    <CardImage>
        <Image isRatio='4:3' src='https://via.placeholder.com/1280x960' />
    </CardImage>
    <CardContent>
        <Media>
            <MediaLeft>
                <Image isSize='48x48' src='https://via.placeholder.com/96x96' />
            </MediaLeft>
            <MediaContent>
                <Title isSize={4}>John Wick</Title>
                <Subtitle isSize={6}>@John Wick</Subtitle>
            </MediaContent>
        </Media>
        <Content>
            People Keep Asking If I’m Back, And I Haven’t Really Had An Answer, But Now, Yeah, I’m Thinking I’m Back.
            <br/>
            <small>11:09 PM - 30 October 2014</small>
        </Content>
    </CardContent>
        </Card>
        </Columns>
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