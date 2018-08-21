import React from 'react';
import Logo from '../components/Logo/Logo.jsx';
import Link from "gatsby-link"
import flyer from './irs-7.jpg'

export default () =>
    <div>
        <Link to="/events/">Next event 24.8 @ Maze</Link>
        <img src={flyer} alt="24.8 IRS #7 @ MAZE"/>
        <Logo />;
    </div>
