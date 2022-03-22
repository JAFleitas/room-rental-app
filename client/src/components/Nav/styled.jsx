import styled from "styled-components"
import { Link } from "react-router-dom"

export const Navigator = styled.nav`
  background-color: #0f1111;
  display: flex;
  flex-direction: row;

  height: 150px;
  justify-content: space-between;
  align-items: center;
`

export const IconContainer = styled.div`
  height: 9vh;
  width: 80px;
  margin-left: 1.5vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  grid-column: 1/2;

  display: flex;
  justify-content: space-around;

  border-radius: 12px;
  background: #0f1111;
`

export const Logo = styled.img`
  width: 100%;
  height: 64px;
  margin-top: 0.5vh;
  background-repeat: no-repeat;
  background-size: contain;
`

export const ToHome = styled(Link)`
  text-decoration: none;
  width: 100px;
`
