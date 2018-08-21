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
      <p>Write us on <a href="https://www.facebook.com/pg/Imaginary-Radio-Stations-723683261161286">facebook</a> or send us an email to
      <br />
      <SmallEmail href="mailto:imaginaryradiostations@gmail.com">imaginaryradiostations@gmail.com</SmallEmail>
      </p>
    </div>
    <Logo />
  </Container>
