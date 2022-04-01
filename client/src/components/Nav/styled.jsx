import styled from "styled-components"
import { Link } from "react-router-dom"

export const Navigator = styled.nav`
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.0665616588432247) 100%
  );
`

export const IconContainer = styled.div`
  height: 9vh;
  height: 90px;
  width: 100px;
  margin-left: 1.5vw;
  margin-top: 2vh;
  margin-bottom: 2vh;
  grid-column: 1/2;

  display: flex;
  justify-content: space-around;

  border-radius: 12px;
  background-color: #e2c8ff;
  transition: background-color 1s;

  &:hover {
    background-color: #eea0fe;
    transition: background-color 1s;
  }
  @media screen and (max-width: 1140px) {
    height: 9vh;
    height: 90px;
    width: 100px;
    margin-left: 1.5vw;
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
  @media screen and (max-width: 900px) {
    height: 9vh;
    height: 70px;
    width: 80px;
    margin-left: 2vw;
    margin-top: 2.5vh;
    margin-bottom: 2.5vh;
  }
  @media screen and (max-width: 700px) {
    height: 9vh;
    height: 50px;
    width: 70px;
    margin-left: 2vw;
    margin-top: 2.5vh;
    margin-bottom: 2.5vh;
  } ;
`

export const Logo = styled.img`
  width: 80%;
  margin-left: 10%;
  height: 85%;
  margin-top: 7.5%;
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
