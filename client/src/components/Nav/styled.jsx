import styled from "styled-components"
import { Link } from "react-router-dom"

export const Navigator = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
 
`

export const IconContainer = styled.div`
  
 

  display: flex;
  justify-content: space-around;

  border: none;
  border-radius: 12px;


`

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-top: 28px;
  background-repeat: no-repeat;
  background-size: contain;
`

export const ToHome = styled(Link)`
  text-decoration: none;
  width: 100px;
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
