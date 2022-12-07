import styled from "styled-components"
import { Link } from "react-router-dom"

export const Navigator = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`

export const IconContainer = styled.div`
  display: flex;

  border: none;
  border-radius: 12px;
`

export const Logo = styled.img`
  width: 60px;
  height: 50px;

  background-repeat: no-repeat;
  background-size: contain;
`

export const ToHome = styled(Link)`
  text-decoration: none;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

// @media screen and (max-width: 1140px) {
//   width: 80%;
//   margin-left: 10%;
// }
// @media screen and (max-width: 900px) {
//   width: 90%;
//   margin-left: 5%;
// }
// @media screen and (max-width: 700px) {
//   width: 100%;
//   margin: 0;
//   margin-top: 5%;
// } ;

export const DesktopNavigation = styled.article`
  display: flex;
  gap: 60px;
  justify-content: space-between;
  align-items: center;
  height: 108px;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    :hover {
      color: #e9e0e0;
    }
  }
`
