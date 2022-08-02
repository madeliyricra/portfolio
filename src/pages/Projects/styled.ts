import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 20px 30px;
  margin: 0 auto;
  width: 100%;
  min-width: 360px;
  max-width: var(--tablet-landscape);
  min-height: 100vh;
  scroll-snap-align: start;
  p{
    font-size: 17px;
    text-align: center;
    line-height: 25px;
  }
  @media screen and (min-width: 600px){
    padding: 100px 30px 30px;
  }
`;

export const ListProjects = styled.ul`
  display: grid;
  gap: 20px;
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr;
  }
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