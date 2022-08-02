import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 100px 20px 0;
  margin: 0 auto;
  width: 100%;
  min-width: 360px;
  max-width: 1440px;
  height: calc(100vh);
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
  grid-template-columns: 40% 1fr;
  justify-content: center;
  align-items: center;
  gap: 20px;
  p{
    padding: 20px 0 0;
    font-size: 20px;
    line-height: 30px;
  }
`