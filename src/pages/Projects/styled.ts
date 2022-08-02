import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 20px 0;
  margin: 0 auto;
  width: 100%;
  min-width: 360px;
  max-width: var(--width-web);
  min-height: 100vh;
  scroll-snap-align: start;
  p{
    font-size: 17px;
    text-align: center;
    line-height: 25px;
  }
`;

export const ListProjects = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const Tag = styled.span`
  padding: 5px 10px;
  background: red;
  border-radius: 10px;
  font-size: 13px;
  color: #fff;
`

export const Link600 = styled.a`
  font-weight: 600;
`