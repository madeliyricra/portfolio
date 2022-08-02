import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 100px 20px 0;
  margin: 0 auto;
  width: 100%;
  min-width: 360px;
  max-width: var(--width-web);
  min-height: 100vh;
  scroll-snap-align: start;
`;

export const Skills = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

export const Description = styled.section`
  display:  grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 30px;
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
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 100%;
  height: 100%;
`