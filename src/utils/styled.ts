import styled from "styled-components";
import border_title from './../assets/images/border_title.png'

export const Title = styled.h2`
  position: relative;
  padding: 0 0 45px 0;
  font-size: 45px;
  font-weight: 900;
  text-align: center;
  &:after{
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 40px;
    background: url(${border_title});
    background-size: contain;
    background-repeat: no-repeat;
  }
`

export const BorderImage = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border: 3px solid var(--blue-900);
  border-radius: 50%;
  img{
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 3px solid transparent;
  }
`