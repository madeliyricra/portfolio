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