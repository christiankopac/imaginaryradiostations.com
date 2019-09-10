import React from 'react'
import baffle from 'baffle'
import './AnimatedText.css'

class AnimatedText extends React.Component {
  componentDidMount() {
    baffle('.text--animated')
      .start()
      .set({
        characters: '░░░░░',
        speed: 200,
      })
      .reveal(2500)
  }
  render() {
    return <div className="text--animated">{this.props.text}</div>
  }
}

export default AnimatedText
