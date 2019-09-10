import React from 'react'
import styled from 'styled-components'
import flyer from './irs-8.png'

const Events = styled.div`
    max-width: 600px;
    margin: 1.6rem 0.8rem;
`
const Title = styled.h2``
const Location = styled.p``
// const image = styled.img``
// const Address = styled.p``
const Time = styled.p``

export default () => (
  <Events>
    <Title>
14.9.2018
      <br />
Imaginary Radio Stations
      <br />
      {' '}
#8
    </Title>
    <ul>
      <li>
        <a href="http://soundcloud.com/cleymoore">Cleymoore</a>
        {' '}
(
        <a href="https://soundcloud.com/pluie-noir">Pluie/Noir</a>
)
      </li>
      <li><a href="http://soundcloud.com/bklxa">Bakläxa</a></li>
      <li><a href="http://soundcloud.com/198319831983">1983</a></li>
      <li><a href="http://soundcloud.com/cp-ak">CP-AK</a></li>
    </ul>
    <Location>
Where:
      <a href="https://maze.berlin">maze berlin</a>
      {' '}
(Mehringdamm 61)
    </Location>
    <Time>When: 22:00+</Time>
    <p>
join us on
      <a href="https://www.residentadvisor.net/events/1157178">Resident Advisor</a>
      {' '}
or
      <a href="https://www.facebook.com/events/2159374057676879/">Facebook</a>
.
    </p>
    <img src={flyer} alt={flyer} />
  </Events>
)
