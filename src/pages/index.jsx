import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from '../components/Logo/Logo'
// import flyer from './irs-8.png'
import Layout from '../components/Layout'

const Index = styled.div`
    margin: 3rem auto;
    max-width: 90%
    `

export default () => (
  <Layout>
    <Index>
      <iframe title="soundcloud" width="100%" height="20" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/495602898&color=%231c1c1b&inverse=false&auto_play=true&show_user=true" />
      <Logo />
    </Index>
  </Layout>
)
