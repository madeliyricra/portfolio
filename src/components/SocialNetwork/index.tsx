import Icon from '../Icon'
import { Container, ItemSocial, ListSocial } from './styled'

const SocialNetwork = () => {
  const data = [
    {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com/madeliyricra'
    },
    {
      name: 'GitLab',
      icon: 'gitlab',
      url: 'https://gitlab.com/madeliyricra'
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/madeliyricra'
    },
  ]
  return (
    <Container>
      <ListSocial>
        {
          data?.map((social, key) => {
            return (
            <ItemSocial key={key}>
              <a href={social?.url} target='_blank'><Icon name={social?.icon}/></a>
            </ItemSocial>)
          })
        }
      </ListSocial>
    </Container>
  )
}

export default SocialNetwork