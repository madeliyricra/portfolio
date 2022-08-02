import { projects, Title } from '../../utils';
import Project from './Project';
import { Container, ListProjects } from './styled';

const Projects = () => {
  return (
    <Container id='projects' className='section'>
      <Title>Mis proyectos</Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque rem sed quaerat aut accusantium dicta odio distinctio odit quo repudiandae vero, at quibusdam ex deserunt porro excepturi quidem, sit veritatis?</p>
      <ListProjects>
        {
          projects?.map((project, key)=> <Project key={key} {...project}/>)
        }
      </ListProjects>
    </Container>
  )
}

export default Projects