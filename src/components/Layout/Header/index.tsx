import React, { useEffect, useState } from 'react'
import { Brand, Container, Indicator, Nav, IconNavBar, NavItem } from './styled'


const Header = () => {
  const [itemActive, setItemActive] = useState(0)
  const iconNavBar : any = React.createRef()

  const observer : any = new IntersectionObserver((entradas, observer) => {
    const sections : any = document.querySelectorAll('.section')
    entradas.forEach(entrada => {
      if(entrada.isIntersecting){
        const item = [...sections].indexOf(entrada.target)
        setItemActive(item)
      }
    })
  }, {
    rootMargin: '-80px 0px 0px 0px',
    threshold: 0.2
  })

  useEffect(() => {
    const sections : any = document.querySelectorAll('.section')
    sections.forEach((section: any) => observer.observe(section))
    window.addEventListener('resize', resizeMenu)
  }, [])

  const handleMenu = () =>{
    iconNavBar?.current?.classList.toggle('active');
  }

  const resizeMenu = () =>{
    const width = window.innerWidth;
    if(width > 768){
      iconNavBar?.current?.classList.remove('active');
    }
  }

  return (
    <Container id='header'>
      <Brand>MR</Brand>
      <IconNavBar className='' onClick={handleMenu} ref={iconNavBar}>
        <span></span>
        <span></span>
        <span></span>
      </IconNavBar>
      <Nav>
        <NavItem href={'#home'} id="nav_home" className={itemActive === 0 ? 'active' : ''}>Inicio</NavItem>
        <NavItem href={'#about'} id="nav_about" className={itemActive === 1 ? 'active' : ''}>Sobre mi</NavItem>
        <NavItem href={'#projects'} id="nav_projects" className={itemActive === 2 ? 'active' : ''}>Proyectos</NavItem>
        <Indicator width={120} transform={itemActive}/>
      </Nav>
    </Container>
  )
}

export default Header