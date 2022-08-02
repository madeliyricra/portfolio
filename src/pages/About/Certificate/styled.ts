import styled from "styled-components";

export const Container = styled.a`
  margin: auto;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: -1px 0px 2px 1px #d9d9d9;
  &:nth-child(2n){
    display: none;
  }
  @media screen and (min-width: 480px){
    width: 80%;
  }
  @media screen and (min-width: 600px){
    width: 100%;
    height: 250px;
  }
  @media screen and (min-width: 1024px){
    height: 200px;
    &:nth-child(2n){
        display: block;
    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`