import styled from "styled-components";

export const Container = styled.div`
  display: none;
  position: fixed;
  width: 55px;
  height: 40vh;
  bottom: 0;
  right: 0;
  margin: 0 10px 0 0;
  &:after{
    content: "";
    position: absolute;
    bottom: 0;
    right: 25px;
    z-index: -1;
    width: 6px;
    height: 100%;
    background: #0e172c;
  }
  @media screen and (min-width: 768px){
    display: block;
  }
`;

export const ListSocial = styled.ul`
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  svg{
    width: 35px;
    height: 35px;
    fill: #fff;
  }
`;

export const ItemSocial  = styled.li`
  a{
    display: grid;
    place-items: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background: var(--blue-900);
    &:hover{
      background: #1b2640;
    }
  }
`;