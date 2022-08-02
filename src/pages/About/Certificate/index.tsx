import { ICertificate } from "../props"
import { Container } from "./styled"


const Certificate = (props:  ICertificate) => {
  const {name, image, link} = props
  return (
    <Container href={link} target="_blank">
      <img src={image} alt={name}/>
    </Container>
  )
}

export default Certificate