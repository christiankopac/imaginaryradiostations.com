import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Container from "../components/Container";
import Layout from "../components/Layout";
import AudioCard from "audiocard";
import ReactAudioPlayer from "react-audio-player";

const StyledContainer = styled(Container)`
  //padding: 20px 20px;
  //margin: 1.6rem 1.2rem;
  //max-width: 600px;
`;
const StyledLink = styled(Link)`
  margin: 0;
  text-decoration: none;
`;
const StyledTitle = styled.h3`
  margin: 0 0 0.3rem;
  cursor: pointer;
`;
const Mix = styled.div`
  margin-bottom: 20px;
  border-bottom: 0.02rem solid #ccc;
`;
const Title = styled.h1`
  margin: 0;
`;
const Count = styled.p`
  font-size: 0.9rem;
`;
const StyledTags = styled.p`
  font-family: "Menlo Code", "Source Code Pro", monospace;
  font-size: 0.7rem;
`;
const mixes = ({ data }) => {
  return (
    <Layout>
      <StyledContainer>
        <Title>recordings</Title>
        <Count>{data.allMarkdownRemark.totalCount} mixes</Count>

        {data.allMarkdownRemark.nodes.map((node) => (
          <>
            <h1>{node.frontmatter.title}</h1>
            <h6>{node.frontmatter.date}</h6>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </>
        ))}
      </StyledContainer>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      nodes {
        id
        html
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
`;

export default mixes;
