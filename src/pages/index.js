import React from 'react';
import Logo from '../components/Logo/Logo.jsx';
import Link from "gatsby-link"
import flyer from './irs-7.jpg'
import styled from "styled-components"

const Index = styled.div`
    margin: 3rem auto;
    max-width: 90%
    `

export default () =>
    <Index>
        {/* <Link to="/events/">Next event 24.8 @ Maze</Link> */}
        <a href=""><img src={flyer} alt="24.8 IRS #7 @ MAZE" /></a>

        <iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/491800074&color=%23443c44&inverse=false&auto_play=true&show_user=true"></iframe>

        {/* <Logo />; */}
    </Index>
