import styled from "styled-components"

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 50% 50%;
  min-width: 500px;

  @media (max-width: 1120px) {
    grid-template-columns: 45% 55%;
  }

  @media (max-width: 720px) {
    height: 180vh;
    grid-template-columns: 100%;
    grid-template-rows: repeat(9, 20vh);
  }
`
export const MenuContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 90%;
  min-width: 300px;
  height: 90%;
  margin-top: 7%;
  margin-bottom: 22%;
  margin-left: 5%;
  padding: 10px;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  @media (max-width: 720px) {
    height: 90%;
    width: 90%;
    margin-left: 5%;
    grid-column: 1/2;
    grid-row: 1/4;
    margin-top: 10%;
    align-content: space-between;
    flex-direction: row;
  }
`
export const MenuOptions = styled.div`
  height: 40%;
  width: 80%;
  margin-left: 10%;
  margin-top: 10%;
`
export const MenuOption = styled.h3`
  font-size: 1rem;
  width: 50%;
  color: black;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  border-bottom: 2px solid #d0a6ff;
  &:hover {
    background-color: #d0a6ff;
    border-bottom: 2px solid #be86ff;
    transition: 500ms;
  }
`
export const ProfileImageContainer = styled.div`
  margin-left: 15%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  height: 45%;
  width: 70%;
  border-radius: 999px;
  border: 2px black solid;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 1020px) {
    height: 50%;
  } */

  @media (max-width: 720px) {
    align-self: center;
    width: 350px;
    height: 200px;
    min-width: 0;
    margin-top: 5%;
    margin-left: 5%;
    grid-row: 1/2;
  }
`
export const ProfileImage = styled.img`
  background-size: contain;
  font-size: small;
`

export const RentHistory = styled.div`
  grid-column: 2/3;
  grid-row: 2/4;
  width: 80%;
  margin-left: 10%;
  height: 80%;
  margin-top: 3%;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 20px;
  padding: 5%;

  @media (max-width: 720px) {
    width: 90%;
    margin-left: 5%;
    font-size: 1rem;
    grid-column: 1/2;
    grid-row: 5/7;
  }
`

export const Settings = styled.button`
  width: 80%;
  height: 10%;
  margin-left: 10%;
  margin-top: 5%;
  border-radius: 10px;
  background-color: #d722fc;
  color: white;

  @media (max-width: 720px) {
    height: 20%;
  }
`

export const UserProperties = styled.div`
  grid-column: 2/3;
  grid-row: 4/6;
  width: 80%;
  margin-left: 10%;
  height: 80%;
  margin-top: 3%;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 20px;
  padding: 5%;

  @media (max-width: 720px) {
    width: 90%;
    margin-left: 5%;
    font-size: 1rem;
    grid-column: 1/5;

    grid-row: 7/9;
  }
`
