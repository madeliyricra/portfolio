import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px 20px 0;
  margin: 0 auto;
  width: 100%;
  min-width: 360px;
  max-width: var(--tablet-landscape);
  min-height: 100vh;
  scroll-snap-align: start;
  @media screen and (min-width: 600px){
    padding: 100px 30px 0;
  }
`;

export const Skills = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 20px;
  @media screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px){
    display: flex;
    flex-wrap: wrap;
  }
`

export const Description = styled.section`
  display:  grid;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
  .about-content{
    display: flex;
    flex-direction: column;
    gap: 20px;
    p{
      font-size: 17px;
      line-height: 30px;
    }
    .studies{
      h5{
        padding: 0 0 10px 0;
        font-size: 20px;
      }
      ul{
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 0 0 0 20px;
        li{
          font-size: 17px;
          list-style: square;
          &::marker{
            margin-right: 10px;
          }
        }
      }
    }
  }
`

export const Certificates = styled.section`
  display: grid;
  gap: 20px;
  height: 100%;
  height: 100%;
  @media screen and (min-width: 600px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 1024px){
    gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`