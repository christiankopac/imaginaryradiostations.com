import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../components/Container'
import Layout from '../components/Layout'
import AudioCard from 'audiocard'
import ClippPlayer from 'clipp-player'

const StyledContainer = styled(Container)`
  //padding: 20px 20px;
  //margin: 1.6rem 1.2rem;
  //max-width: 600px;
`
const StyledLink = styled(Link)`
  margin: 0;
  text-decoration: none;
`
const StyledTitle = styled.h3`
  margin: 0 0 0.3rem;
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
//
// constructor(props) {
//   super(props);
//
//   this.state = {
//     playing: false,
//     pos: 0
//   };
//   this.handleTogglePlay = this.handleTogglePlay.bind(this);
//   this.handlePosChange = this.handlePosChange.bind(this);
// }
// handleTogglePlay() {
//   this.setState({
//     playing: !this.state.playing
//   });
// }
// handlePosChange(e) {
//   this.setState({
//     pos: e.originalArgs[0]
//   });
// }
// class Mixes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//       playing: false
//     };
//   }


// class Mixes extends React.Component {
//   constructor(data) {
//     super(<data></data>);
//     this.state = {
//       playing: false
//     };
//   }
//   render()
//   {
//     return (
  export default ({data}) => {
    // const post = data.allWordpressPost.edges[0].node
    // console.log(post)
    return(
      <Layout>
        <StyledContainer>
          <Title>recordings</Title>
          <Count>
            {data.allMarkdownRemark.totalCount}
            {' '}
            mixes
          </Count>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Mix id={node.id}>
              {/*<StyledLink to={node.fields.slug}>*/}
              <StyledTitle>{node.frontmatter.title}</StyledTitle>
              {/*</StyledLink>*/}
              <div class=''>
              <ClippPlayer
                className={'clipp-player'}
                src={node.frontmatter.audio.publicURL}
                btnStyle={{
                  color: '#FFF',
                  border: '0px solid #FFF',
                  // borderRadius: '10px',
                  backgroundColor: '#111',
                  fontSize: '10px',
                  background: '#333'
                  // padding: '4px 4px 2px 1px',
                  // margin: '40px 0 0 10px'
                }}
                counterStyle={{
                  width: '15%',
                  fontSize: '12px',
                  margin: '8px 8px 0 0',
                }}
                volume={1}
                zoom={1}
                options={{
                  audioRate: 1,
                  autoCenter: false,
                  barGap: 2,
                  cursorColor: '#FFF',
                  cursorWidth: 1,
                  fillParent: true,
                  height: 60,
                  hideScrollbar: true,
                  normalize: true,
                  partialRender: true,
                  progressColor: '#000',
                  responsive: false,
                  waveColor: '#e1e5ea',
                }}
              />
              </div>
              {/*<AudioCard*/}
              {/*  source={node.frontmatter.audio.publicURL}*/}
              {/*/>*/}
              <StyledTags>
                {node.frontmatter.tags.map(tag => `#${tag} `)}
              </StyledTags>
            </Mix>
          ))}
        </StyledContainer>
      </Layout>
    )
  }

export const query = graphql`
    {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    frontmatter {
                        title
                        tags
                        audio {
                            publicURL
                        }
                        date(formatString: "DD MMMM, YYYY")
                    }
                    fields {
                        slug
                    }
                    headings(depth: h6) {
                        value
                        depth
                    }
                    excerpt(pruneLength: 9)
                    internal {
                        content
                    }
                }
            }
        }
    }
`

