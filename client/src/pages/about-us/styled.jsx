import styled from "styled-components"

export const ContainerDiv = styled.div`
  width: 85%;
  margin-left: 7.5%;
  height: auto;
  margin-top: 3.5vh;
  margin-bottom: 3.5vh;
  padding: 10px;
  border-radius: 12px;
  border-radius: 50px;
  border-radius: 50px;
  background: linear-gradient(145deg, #f88aff, #d174e4);

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
  background: linear-gradient(145deg, #9703b5, #b403d7);
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
  padding-bottom: 15%;

  color: #ffffff;
  border-radius: 11px;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(230, 113, 253);

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
