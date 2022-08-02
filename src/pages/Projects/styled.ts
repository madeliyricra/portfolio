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

export const ListProjects = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`