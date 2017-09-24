import React from 'react'
import Link from 'gatsby-link'
import baffle from 'baffle'
import './AnimatedText.css'

var createReactClass = require('create-react-class');

class AnimatedText extends React.Component {
  componentDidMount() {
    baffle('.text--animated')
    .start()
      .set({
        characters: '░░░░░',
        speed: 200
      })
      .reveal(2500);
  }
  render() {
    return (
      <div className="text--animated">
        {this.props.text}
      </div>
    )
  }
}

export default AnimatedText