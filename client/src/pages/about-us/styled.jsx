import styled from "styled-components"

export const ContainerDiv = styled.div`
  width: 100%;

  padding: 10px;
  border-radius: 12px;
  border-radius: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  /* @media (max-width: 1090px) {
    margin-left: 10%;
  } */

  @media (max-width: 740px) {
    width: 95%;
    margin-left: 2.5%;
  }
`
export const TeamMate = styled.div`
  width: 30%;
  margin: 15px;
  border-radius: 12px;
  padding: 10px;
  border: 0.5px solid #a455ff;

  display: grid;
  grid-template-rows: 35% 35% 30%;
  grid-template-columns: 50% 25% 25%;

  @media (max-width: 1090px) {
    width: 45%;
  }
  @media (max-width: 740px) {
    width: calc(50% - 15px);
    margin-left: 10px;
    margin-right: 5px;
  }
`

export const LastTeamMate = styled.div`
  width: 30%;
  margin: 15px;
  border-radius: 12px;
  padding: 10px;
  border: 0.5px solid #a455ff;
  display: grid;
  grid-template-rows: 35% 35% 30%;
  grid-template-columns: 50% 25% 25%;

  @media (max-width: 1090px) {
    width: 45%;
  }
  @media (max-width: 740px) {
    width: calc(60% - 15px);
    margin-left: 10px;
    margin-right: 5px;
  }
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
  height: fit-content;
  margin-top: 10%;
  margin-bottom: 20%;

  margin-right: 5%;
  padding: 3%;
  padding-left: 3%;
  padding-top: 5%;
  padding-bottom: 5%;
  text-align: center;
  color: #a455ff;
  border-radius: 11px;
  grid-row: 1/3;
  grid-column: 2/4;
  /* border: 4px solid #650279; */
  @media (max-width: 740px) {
    font-size: 95%;
  }
`

export const LinkedIn = styled.a`
  text-decoration: none;
  font-size: 200%;
  color: #0462c0;
  grid-row: 3/4;
  grid-column: 3/4;
  margin-left: 20%;
  /* margin-top: 5%; */
  padding: 5px;

  transition: all 0.3s ease-in-out;
  @media (max-width: 740px) {
    margin-top: 60%;
    grid-row: 2/4;
  }
  &:hover {
    color: #0672df;
    transform: scale(1.3);
  }
`

export const GitHub = styled.a`
  text-decoration: none;
  font-size: 200%;
  color: #e2e2e2;
  grid-row: 3/4;
  grid-column: 2/3;
  margin-left: 30px;

  /* margin-top: 5%; */
  padding: 5px;
  /* padding-bottom: 15px; */
  transition: all 0.3s ease-in-out;
  @media (max-width: 740px) {
    margin-top: 60%;
    grid-row: 2/4;
  }

  &:hover {
    transform: scale(1.3);
    color: #fff;
  }
`
