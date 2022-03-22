import styled from "styled-components"

export const ContainerDiv = styled.div`
  width: 85%;
  margin-left: 7.5%;
  height: auto;
  margin-top: 3.5vh;
  margin-bottom: 3.5vh;
  padding: 10px;
  border-radius: 12px;
  background-color: #10002b;
  /* box-shadow: inset 14px 14px 23px #3b005c, inset -14px -14px 23px #5f0096; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`
export const TeamMate = styled.div`
  height: 35%;
  width: 28%;
  margin: 15px;
  border-radius: 12px;
  background: linear-gradient(145deg, #b92fcc, #9c28ac);
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
  border-radius: 99px;
  border: 2px black solid;
  grid-column: 1/2;
  grid-row: 1/4;
  padding: 1px;
  background-color: black;
`

export const Name = styled.h1`
  font-size: 120%;
  font-weight: 600;
  width: 95%;
  height: 100%;
  margin-top: 2%;
  margin-right: 5%;
  padding: 3%;
  padding-left: 5%;
  color: #ffffff;
  border-radius: 11px;
  background: #bf2cb8;
  box-shadow: inset 5px 5px 10px #541351, inset -5px -5px 10px #ff45ff;

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
  &:hover {
    color: white;
  }
`

export const GitHub = styled.a`
  text-decoration: none;
  font-size: 200%;
  color: #39005b;
  grid-row: 3/4;
  grid-column: 2/3;
  margin-left: 40%;
  margin-top: 5%;

  &:hover {
    color: white;
  }
`
