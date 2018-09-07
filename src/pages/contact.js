import React from 'react'
import Logo from '../components/Logo/Logo.jsx'
import AnimatedText from '../components/AnimatedText/AnimatedText.js'
import SubscribeFrom from "react-mailchimp-subscribe"
import Link from 'gatsby-link'
import styled from "styled-components"

const Container = styled.div`
  max-width: 600px;
  margin: 1.6rem 0.8rem;
`
const SmallEmail = styled.p`
  font-size: .9rem;
  font-weight: bold;
  color: tomato;
  padding: 0.8rem auto;
  display: block;
`
export default () =>
  <Container>
    <h1>Get in touch!</h1>
    <div>
      <p>Send us an email to <SmallEmail href="mailto:imaginaryradiostations@gmail.com">imaginaryradiostations@gmail.com</SmallEmail> or write us on <a href="https://www.facebook.com/pg/Imaginary-Radio-Stations-723683261161286">facebook</a>...
      </p>
      <p>or maybe on <a href="https://instagram.com/imaginaryradiostations">instagram</a>?</p>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <Logo />
  </Container>
