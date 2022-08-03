import styled from "styled-components"
import { IIndicator } from "./props"

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  width: 100%;
  height: 80px;
  background-color: var(--blue-900);
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  display: none;
  @media screen and (min-width: 768px){
    display: flex;
  }
`
 
export const NavItem = styled.a`
  display: grid;
  place-items: center;
  width: 120px;
  height: 80px;
  font-size: 16px;
  color: #fff;
`

export const Indicator = styled.span<IIndicator>`
  position: absolute;
  bottom: 0;
  width: ${props => props.width ? `${props?.width}px` : "0px"};
  height: 5px;
  background: #fff;
  transform: ${props => props.transform ? `translateX(${props.width  * props.transform}px)` : "initial"}; 
  transition: .3s ease-out all;
`

export const Brand = styled.h2`
  font-size: 40px;
  font-weight: 900;
  color: #fff;
`

export const IconNavBar = styled.button`
  background: transparent;
  cursor: pointer;
  &:hover{
    span:nth-child(2){
      transform: translateX(10px);
      background: var(--purple-200);
    }
  }
  &.active{
    span{
      &:nth-child(1){
        transform: translate(0, -2px) rotate(45deg);
      }
      &:nth-child(2){
        opacity: 0;
        transform: translate(15px);
      }
      &:nth-child(3){
        transform: translate(-3px, 3px) rotate(-45deg);
      }
    }
  }
  &.active ~ nav{
    position: fixed;
    position: fixed;
    top: 80px;
    left: 0;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100vh;
    height: 100vh;
    background: #0e172cd1; 
    a{
      justify-content: start;
      padding: 0 20px;
      width: 100%;
      &.active,
      &:hover{
        background: var(--purple-200);
        border-bottom: 3px solid #fff;
      }
    }
  }
  span{
    position: relative;
    display: block;
    width: 33px;
    height: 4px;
    margin: 0 0 5px;
    border-radius: 6px;
    background: #fff;
    z-index: 1;
    transform-origin: 0 0;
    transition: .4s;
    pointer-events: none;
  }
  @media screen and (min-width: 768px){
    display: none;
  }
`