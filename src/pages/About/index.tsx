import { BorderImage, skills, Title } from '../../utils';
import my_photo from './../../assets/images/my_photo.jpg'
import Skill from './Skill';
import { Container, Description, Skills } from './styled';


const About = () => {
  return (
    <Container id='about' className='section'>
      <Title>Sobre mi</Title>
      <Description>       
        <div>
          <BorderImage>
            <img src={my_photo} alt="My photo"/>
          </BorderImage>
          <p>
            Soy desarrolladora frontend, con capacidad de trabajar en equipo, creatividad, innovación 
            y el resolución de problemas. Busco colaborar en el desarrollo de proyectos web con el fin 
            de aplicar mis habilidades y seguir aprendiendo.
          </p>
          <h5>Estudios</h5>
          <p>Técnico en computación e informática</p>
        </div>
        <div>
          sss
        </div>
      </Description>
      <Skills>
        {
          skills?.map((skill, key)=> (<Skill key={key} {...skill}/>))
        }
      </Skills>
    </Container>
  )
}

export default About