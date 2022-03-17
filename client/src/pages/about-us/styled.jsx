import styled from "styled-components"

export const ContainerDiv = styled.div`
  width: 70%;
  margin-left: 15%;
  height: 55vh;
  margin-top: 3.5vh;
  border-radius: 12px;
  background: #4d0079;
  box-shadow: inset 14px 14px 23px #3b005c, inset -14px -14px 23px #5f0096;
  display: flex;

  overflow: hidden;
`
export const TeamMate = styled.div`
  height: 45%;
  width: 35%;
  margin: 20px;
  border-radius: 12px;
  background: linear-gradient(145deg, #ab46e6, #cb53ff);
  /* box-shadow: 9px 9px 12px #9c40d1, -9px -9px 12px #e05cff; */
  display: grid;
  grid-template-rows: 35% 35% 30%;
  grid-template-columns: 50% 50%;
`

export const TeamMateImage = styled.img`
  width: 80%;
  margin-left: 10%;
  height: 80%;
  margin-top: 10%;
  border-radius: 5px;

  grid-column: 1/2;
  grid-row: 1/4;
  border: 1px black solid;
`

export const Name = styled.h1`
  font-size: 120%;
  font-weight: 600;
  width: 95%;
  height: 100%;
  margin-top: 2%;
  margin-right: 5%;
  padding: 2%;
  color: #ffffff;
  border-radius: 12px;
  background: #7300b5;
  box-shadow: inset 4px 4px 8px #44006b, inset -4px -4px 8px #a200ff;

  grid-row: 1/2;
  grid-column: 2/3;
`

export const LinkedIn = styled.a`
  text-decoration: none;
  font-size: 200%;
  color: #39005b;
  grid-row: 2/3;
  grid-column: 2/3;
  margin-left: 40%;
  margin-top: 10%;
`

export const GitHub = styled.a`
  text-decoration: none;
  font-size: 200%;
  color: #39005b;
  grid-row: 3/4;
  grid-column: 2/3;
  margin-left: 40%;
  margin-top: 5%;
`
