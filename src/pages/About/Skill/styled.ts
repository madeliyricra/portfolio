import styled from "styled-components";

export const Container = styled.article`
  padding: 15px;
  width: 100%;
  min-height: 150px;
  border: 1px solid var(--blue-900);
  border-radius: 10px;
  @media screen and (min-width: 480px){
    margin: 0 auto;
    width: 80%;
  }
  @media screen and (min-width: 600px){
    margin: 0;
    width: 300px;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    @media screen and (min-width: 768px){
      justify-content: start;
    }
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
    fill: var(--purple-200);
  }
`