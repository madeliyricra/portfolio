import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: calc(100vh);
  background: red
  scroll-snap-align: start;
`;

const About = () => {
  return (
    <Container id='about' className='section'>
    about
    </Container>
  )
}

export default About