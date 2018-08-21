import React from "react"
import styled from "styled-components"
import flyer from "./irs-7.jpg"
import { withPrefix } from 'gatsby-link'


const Events = styled.div`
    max-width: 600px;
    margin: 1.6rem 0.8rem;
`
const Title = styled.h2``
const Location = styled.p``
const image = styled.img``
const Address = styled.p``
const Time = styled.p``

export default () =>
            <Events>
                <Title>24.8.2018<br />Imaginary Radio Stations<br /> #7</Title>
            <ul>
                <li><a href="http://soundcloud.com/nitz">Nitz</a>! (live)!</li>
                <li>Evano</li>
                <li>CP-AK</li>
                <li>1983</li>
                </ul>
                <Location>Where: <a href="https://maze.berlin" target="_blank">maze berlin</a> (Mehringdamm 61)</Location>
                <Time>When: 22:00-03:00</Time>
                <p>join us on <a href="https://www.residentadvisor.net/events/1148042">RA</a> or <a href="https://www.facebook.com/events/989191654596143/">fb</a>.</p>
                <img src="{flyer}"/>
            </Events>