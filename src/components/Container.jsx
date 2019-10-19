import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 1.6rem 0.8rem;
  max-width: 600px;
`;

export default ({ children }) =>
  <Container>
    {children}
  </Container>
