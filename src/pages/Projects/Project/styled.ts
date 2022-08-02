import styled from "styled-components"

export const Container =  styled.div<{image?: string}>`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 15px;
  background: #0000008f;
  &.odd{
    grid-column: 1/3;
  }
  &: after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-image: url(${(props) => props.image});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(1px);
  }
  section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 15px;
    margin: 0 auto;
    width: 80%;
    height: 100%;
    h3{
      font-size: 20px;
    }
    h3, p{
      color: #fff;
    }
  }
`

export const LinkIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 7px 15px;
  width: fit-content;
  border-radius: 20px;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  &:hover{
    background: #ffffff29;
  }
  svg{
    width: 20px;
    height: 20px;
    stroke: #fff;
  }
`
