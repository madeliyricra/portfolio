import styled from "styled-components";

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 900;
`

export const BorderImage = styled.div`
  margin: auto;
  width: 200px;
  height: 200px;
  border: 3px solid var(--purple-200);
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