import styled from "styled-components"

export const ContainerDiv = styled.div`
  width: 85%;
  margin-left: 7.5%;
  height: auto;
  margin-top: 3.5vh;
  margin-bottom: 3.5vh;
  padding: 10px;
  border-radius: 12px;
  border-radius: 20px;
  background: linear-gradient(145deg, #dfb2ff, #bb95e6);

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
  background: rgb(232, 129, 253);
  background: linear-gradient(
    135deg,
    rgba(232, 129, 253, 1) 0%,
    rgba(230, 113, 253, 1) 46%,
    rgba(227, 97, 253, 1) 100%
  );
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
  background: rgb(232, 129, 253);
  background: linear-gradient(
    135deg,
    rgba(232, 129, 253, 1) 0%,
    rgba(230, 113, 253, 1) 46%,
    rgba(227, 97, 253, 1) 100%
  );
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
  color: #ffffff;
  border-radius: 11px;
  grid-row: 1/3;
  grid-column: 2/4;
  background-color: #39005b;
  /* border: 4px solid #650279; */
  @media (max-width: 740px) {
    font-size: 95%;
  }
`

export const LinkedIn = styled.a`
  text-decoration: none;
  font-size: 200%;
  color: #39005b;
  grid-row: 3/4;
  grid-column: 3/4;
  margin-left: 20%;
  /* margin-top: 5%; */
  padding: 5px;

  @media (max-width: 740px) {
    margin-top: 60%;
    grid-row: 2/4;
  }

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
  margin-left: 20%;
  /* margin-top: 5%; */
  padding: 5px;
  /* padding-bottom: 15px; */

  @media (max-width: 740px) {
    margin-top: 60%;
    grid-row: 2/4;
  }

  &:hover {
    color: white;
  }
`
