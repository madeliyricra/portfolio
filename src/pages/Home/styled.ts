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
  min-width: 360px;
  max-width: var(--width-web);
  height: calc(100vh);
  scroll-snap-align: start;
`;

export const Presentation = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 30px;
    h1{
      text-transform: uppercase;
      font-size: 60px;
      font-weight: 900;
      color: var(--purple-200);
    }
    span{
      font-weight: 600;
      font-size: 25px;
      color: var(--blue-900);
    }
`;

export const ImgProfile = styled.div`
    position: relative;
    background: url(${profile});
    width: 28rem;
    height: 28rem;
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
`

export const MachineAffection = styled.p<IMachineAffection>`
  white-space: nowrap;
  border-right: 3px solid var(--blue-900);
  font-size: 40px;
  font-weight: 600;
  width: 100%;
  max-width: fit-content;
  animation: typing 2s steps(${props => props.length ? `${props?.length}`: '0'}), 
            blink .5s infinite step-end alternate;
  overflow: hidden;
`