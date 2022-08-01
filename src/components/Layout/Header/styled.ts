import styled from "styled-components"
import { IIndicator } from "."

export const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  width: 100%;
  height: 80px;
  background-color: #0e172c;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`
 
export const NavItem = styled.a`
  width: 120px;
  text-align: center;
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