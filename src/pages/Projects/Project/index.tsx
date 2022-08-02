import { Icon } from '../../../components'
import { IProject } from '../props'
import { LinkIcon, Container } from './styled'

const Project = (props: IProject) => {
  const {name, image, description, className, link} = props

  return (
    <Container image={image} className={className}>
      <section>
        <h3>{name}</h3>
        {/* <Tag>{type}</Tag> */}
        <p>{description}</p>
        <LinkIcon href={link} target="_blank"><Icon name='eye'/>Ver más</LinkIcon>
      </section>
    </Container>
  )
}

export default Project