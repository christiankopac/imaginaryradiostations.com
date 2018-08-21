import React from 'react';
import Logo from '../components/Logo/Logo.jsx';
import Link from "gatsby-link"
import flyer from './irs-7.jpg'
import styled from "styled-components"

const Index = styled.div`
    margin: 3rem auto;
    max-width: 500px;
    align: center;
    `

export default () =>
    <Index>
        {/* <Link to="/events/">Next event 24.8 @ Maze</Link> */}
        <a href=""><img src={flyer} alt="24.8 IRS #7 @ MAZE"/></a>
        {/* <Logo />; */}
    </Index>
