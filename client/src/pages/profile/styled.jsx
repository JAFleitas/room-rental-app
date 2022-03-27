import styled from "styled-components"

export const PageContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  width: 300px;
  margin-top: 4%;
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
  flex-direction: column;

  @media (max-width: 720px) {
    width: 90%;
    margin: 1rem;

  }
`
export const MenuOptions = styled.div`
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

export const ProfileImage = styled.img`

  margin:1rem;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  justify-self: center;
  align-self: center;

`

export const RentHistory = styled.div`
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
  display: flex;
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
  }
`
