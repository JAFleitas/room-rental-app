import styled from "styled-components"

export const SubMenu = styled.div`
  grid-column: 2/3;
  grid-row: 1/3;
  width: 90%;
  margin-left: 5%;
  height: 80%;
  margin-top: 7%;
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;

  @media (max-width: 720px) {
    grid-row: 5/9;
    grid-column: 1/2;
  }
`

export const FullName = styled.h1`
  grid-column: 1/4;
  grid-row: 1/2;
  width: 90%;
  height: 50%;
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
  border: 2px #d0a6ff solid;
  text-align: center;
`

export const InfoContainer = styled.div`
  grid-row: 2/4;
  grid-column: 1/4;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  margin-left: 5%;
  margin-top: 2%;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 15px;
  border: 2px #d0a6ff solid;
`

export const Info = styled.h3`
  font-size: 1.5rem;
  margin: 10px;
  @media (max-width: 1120px) {
    font-size: 1.25rem;
  }
`
