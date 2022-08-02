import { Icon } from '../../../components'
import { ISkill } from '../props'
import { Container } from './styled'


const Skill = (props : ISkill) => {
  const {title, lenguajes} = props
  return (
    <Container>
      <h4>{title}</h4>
      <ul>
        {
          lenguajes?.map((lenguaje : any, key: number) => (
            <li key={key}>
              <Icon name={lenguaje?.icon} />
              <p>{lenguaje?.name}</p>
            </li>
          ))
        }
      </ul>
    </Container>
  )
}

export default Skill