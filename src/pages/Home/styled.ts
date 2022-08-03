import styled from 'styled-components';
import profile from './../../assets/images/profile.jpg'
import splash from './../../assets/images/splash.png'
import { IMachineAffection } from './props';

export const Container = styled.div`
  display: grid;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
  width: 100%;
  min-width: var(--mobile-portrait);
  max-width: var(--tablet-landscape);
  height: calc(100vh);
  scroll-snap-align: start;
  @media screen and (min-width: 600px){
    padding: 100px 30px 0;
  }
`;

export const Presentation = styled.div`
  display: grid;
  align-items: center;
  gap: 30px;
  @media screen and (min-width: 768px){
    grid-template-columns: auto 1fr;
  }
  h1{
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 900;
    color: var(--purple-200);
    @media screen and (min-width: 480px){
      font-size: 50px;
    }
    @media screen and (min-width: 1024px){
      font-size: 60px;
    }
  }
  span{
    font-weight: 600;
    font-size: 15px;
    color: var(--blue-900);
    @media screen and (min-width: 480px){
      font-size: 20px;
    }
    @media screen and (min-width: 1024px){
      font-size: 25px;
    }
  }
`;

export const ImgProfile = styled.div`
    position: relative;
    margin: auto;
    width: 18rem;
    height: 18rem;
    background: url(${profile});
    background-size: cover;
    &:after{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 100%;
      height: 100%;
      background: url(${splash});
      background-size: cover;
      background-position: center;
      mix-blend-mode: screen;
    }
    @media screen and (min-width: 480px){
      width: 25rem;
      height: 25rem;
    }
    @media screen and (min-width: 768px){
      width: 20rem;
      height: 20rem;
    }
    @media screen and (min-width: 1024px){
      width: 28rem;
      height: 28rem;
    }
`

export const MachineAffection = styled.p<IMachineAffection>`
  white-space: nowrap;
  border-right: 3px solid var(--blue-900);
  font-size: 30px;
  font-weight: 600;
  width: 100%;
  max-width: fit-content;
  animation: typing 2s steps(${props => props.length ? `${props?.length}`: '0'}), 
            blink .5s infinite step-end alternate;
  overflow: hidden;
  @media screen and (min-width: 480px){
    font-size: 35px;
  }
  @media screen and (min-width: 1024px){
    font-size: 40px;
  }
`