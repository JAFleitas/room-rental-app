import styled from "styled-components"
import { Link } from "react-router-dom"

export const Navigator = styled.nav`
  background-color: #c96cff;
  display: grid;
  grid-template-columns: 25% 60% 15%;
  height: 13vh;
`

export const IconContainer = styled.div`
  height: 9vh;
  width: 22vw;
  min-width: 250px;
  margin-left: 1.5vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  grid-column: 1/2;

  display: flex;
  justify-content: space-around;

  border-radius: 12px;
  background: #e0aaff;
  box-shadow: 5px 5px 11px #8b699e, -5px -5px 11px #ffebff;
`

export const Logo = styled.img`
  height: 8vh;
  min-height: 40px;
  width: 4vw;
  min-width: 50px;
  margin-top: 0.5vh;
  background-repeat: no-repeat;
  background-size: contain;
`

export const Title = styled.div`
  height: 5.6vh;
  width: 14vw;
  min-width: 200px;
  font-size: 4vh;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  color: #13001e;
  border-radius: 17px;
  margin-top: 1.5vh;
  margin-right: -0.75vw;
`
export const ToHome = styled(Link)`
  text-decoration: none;
`
