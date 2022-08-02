import React, { useEffect, useState } from 'react'
import { Container, ImgProfile, MachineAffection, Presentation } from './styled'

const Home = () => {
  const machineAffection : any = React.createRef()
  const [lengthType, setLengthType] = useState(0)

  useEffect(() => {
    setLengthType(machineAffection?.current?.outerText?.length)
  }, [])

  return (
    <Container id="home" className='section'>
      <Presentation>
        <ImgProfile />
        <div>
          <span>Hola, soy</span>
          <h1>MADELIY RICRA</h1>
          <MachineAffection ref={machineAffection} length={lengthType}>Desarrrollador frontend</MachineAffection>
        </div>
      </Presentation>
    </Container>
  )
}

export default Home