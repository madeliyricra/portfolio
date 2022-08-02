import React from 'react'
import styled from 'styled-components'
import { Icon } from '../../../components'

const Container = styled.article`
  padding: 15px;
  width: 300px;
  min-height: 150px;
  border: 2px solid var(--blue-900);
  border-radius: 10px;
  ul{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li{
      width: 80px;
      text-align: center;
      p{
        font-weight: 600;
      }
    }
  }
  h4{
    font-size: 20px;
    text-align: center;
    padding: 0 0 15px 0;
  }
  svg{
    width: 30px;
    height: 30px;
  }
`

const Skill = (props : any) => {
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