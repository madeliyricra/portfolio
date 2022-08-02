import { BorderImage, certificates, skills, studies, Title } from '../../utils'
import my_photo from './../../assets/images/my_photo.jpg'
import Certificate from './Certificate'
import Skill from './Skill'
import { Certificates, Container, Description, Skills } from './styled'

const About = () => {
  return (
    <Container id='about' className='section'>
      <Title>Sobre mi</Title>
      <Description>       
        <section className='about-content'>
          <BorderImage>
            <img src={my_photo} alt="My photo"/>
          </BorderImage>
          <p>
            Soy desarrolladora frontend, con capacidad de trabajar en equipo, creatividad, innovación 
            y el resolución de problemas. Busco colaborar en el desarrollo de proyectos web con el fin 
            de aplicar mis habilidades y seguir aprendiendo.
          </p>
          <div className='studies'>
            <h5>Estudios</h5>
            <ul>
              {
                studies?.map((studie: string)=> <li>{studie}</li>)
              }
            </ul>
          </div>
        </section>
        <Certificates>
          {
            certificates?.map((certificate, key) => <Certificate key={key} {...certificate}/>)
          }
        </Certificates>
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