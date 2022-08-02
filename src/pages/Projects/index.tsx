import { projects, repository, Title } from '../../utils'
import Project from './Project'
import { IProject } from './props'
import { Container, Link600, ListProjects } from './styled'

const Projects = () => {
  return (
    <Container id='projects' className='section'>
      <Title>Mis proyectos</Title>
      <p>Estos son mis mejores proyectos, todo se puede visualizar en mi repositorio <Link600 href={repository}>GitHub</Link600></p>
      <ListProjects>
        {
          projects?.map((project : IProject, key)=> {
            let className : string = ''
            if(projects?.length === (key+1)){
              className = projects?.length % 2 ? 'odd' : ''
              project.className = className
            }
            return (<Project key={key} {...project}/>)
          })
        }
      </ListProjects>
    </Container>
  )
}

export default Projects