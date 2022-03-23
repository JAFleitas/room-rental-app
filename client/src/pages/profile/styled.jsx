import styled from "styled-components"

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: repeat(5, 20%);
  min-width: 500px;

  @media (max-width: 1120px) {
    grid-template-columns: 45% 55%;
  }

  @media (max-width: 720px) {
    height: 160vh;
    grid-template-columns: 100%;
    grid-template-rows: repeat(8, 20vh);
  }
`

export const FullName = styled.h1`
  grid-column: 2/3;
  grid-row: 1/2;
  width: 90%;
  height: 70%;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  font-size: 2.5rem;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 15px;
  text-align: center;

  @media (max-width: 720px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
`
export const ProfileImageContainer = styled.div`
  margin-left: 15%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  height: 55%;
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
    width: 150px;
    height: 220px;
    min-width: 0;
    margin-top: 5%;
    margin-left: 5%;
    grid-row: 1/2;
  }
`
// `height=width`:`height=height`
export const ProfileImage = styled.img`
  background-size: contain;
  font-size: small;
`
export const InfoContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/7;
  width: 90%;
  min-width: 300px;
  height: 70%;
  margin-top: 22.5%;
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
    grid-column: 1/2;
    grid-row: 2/5;
    margin-top: 3%;
    align-content: space-between;
  }
`
export const Info = styled.h3`
  font-size: 1.5rem;
  margin: 10px;
  @media (max-width: 1120px) {
    font-size: 1.25rem;
  }
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
