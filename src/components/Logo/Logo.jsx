import React from "react";
import baffle from 'baffle';
import Link from "gatsby-link"
import "./Logo.css";

var createReactClass = require('create-react-class');

class Logo extends React.Component {

  componentDidMount() {
    baffle('.title')
      .start()
      .set({
        characters: '░░░░░',
        speed: 200
      })
      .reveal(2500);
  }
  render() {
    return (
      <div className="logo">
        <h1 className="logo-text">
        <Link to="/about">
          <span className="title">imaginary</span><br/>
          <span className="title">radio</span><br/>
          <span className="title">stations</span>
          </Link>
        </h1>
      </div>
    );
  }
}

export default Logo