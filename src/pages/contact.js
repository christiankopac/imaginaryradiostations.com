import React from 'react'
import Logo from '../components/Logo/Logo.jsx'
import AnimatedText from '../components/AnimatedText/AnimatedText.js'
import SubscribeFrom from "react-mailchimp-subscribe"
import Link from 'gatsby-link'

const formProps = {
  action: "https://sloarg.us2.list-manage.com/subscribe/post?u=9ad0f510b205557f49b6e903e&amp;id=d63a1f66ac",
  messages: {
    inputPlaceholder: "email",
    btnLabel: "Subscribe",
    sending: "Sending...",
    success: "Danke!!",
    error: "Perdón! Impossible to subscribre that address"
  },
  styles: {
    btnLabel: {
      marginLeft: "40"
    },
    inputPlaceholder: {
      marginRight: "40px"
    },
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}
const Form = () => <SubscribeFrom {...formProps} />;

export default () =>
  <div style={{ margin: '3rem auto', maxWidth: 600 }}>
    <h1>Get in touch!</h1>
    <div>
      <p>
      Write us on <a href="https://www.facebook.com/pg/Imaginary-Radio-Stations-723683261161286">facebook</a> or send us an email to <a href="mailto:yes@imaginaryradiostations.com">yes@imaginaryradiostations.com</a>
      </p>
      <Form />
    </div>
    <AnimatedText text="imaginary radio stations"/>
    <Logo />
  </div>
