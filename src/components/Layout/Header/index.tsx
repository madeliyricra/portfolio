import React, { useEffect, useState } from 'react'
import { Container, Indicator, Nav, NavItem } from './styled'

export interface IIndicator {
  width : number,
  transform: number
}

const Header = () => {
  const [itemActive, setItemActive] = useState(0)
  const [widthIndicator, setWidthIndicator] = useState(120)

  const observer : any = new IntersectionObserver((entradas, observer) => {
    const sections : any = document.querySelectorAll('.section');
    entradas.forEach(entrada => {
      if(entrada.isIntersecting){
        setItemActive([...sections].indexOf(entrada.target))
      }
    });
  }, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.2
  });

  useEffect(() => {
    const sections : any = document.querySelectorAll('.section')
    sections.forEach((section: any) => observer.observe(section))
  }, [])

  return (
    <Container id='header'>
      <h2 style={{color: 'white'}}>Logo</h2>
      <Nav>
        <NavItem href={'#home'}>Home</NavItem>
        <NavItem href={'#about'}>Sobre mi</NavItem>
        <NavItem href={'#projects'}>Proyectos</NavItem>
        <Indicator width={widthIndicator} transform={itemActive}/>
      </Nav>
    </Container>
  )
}

export default Header