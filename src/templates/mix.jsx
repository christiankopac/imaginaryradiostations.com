import React from "react";
import styled from "styled-components";
import { Link, graphql } from "gatsby";
import Container from "../components/Container";
import ReactAudioPlayer from 'react-audio-player';

const StyledContainer = styled(Container)`
  padding: 20px 20px;
  margin: 1.6rem 1.2rem;
  max-widht: 600px;
`;

export default ({ props }) => {
  return (
    <StyledContainer>
      <h1>{props.frontmatter.title}</h1>
      <h6>{props.frontmatter.date}</h6>
      <div dangerouslySetInnerHTML={{ __html: props.html }} />
      <ReactAudioPlayer
        src={post.frontmatter.audio}
        autoPlay
        controls
      />
      <Link href="/mixes" to="/mixes">
        back
      </Link>
    </StyledContainer>
  );
};

