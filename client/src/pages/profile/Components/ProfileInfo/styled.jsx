import styled from "styled-components"

export const SubMenu = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-left: 5%;
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
  height: fit-content;
  @media (max-width: 720px) {
    margin: 1rem;
    width: 90%;
  }

`

export const Label = styled.h3`
  font-size: 17px;
  font-weight: bold;
  padding-left: 10px;
`

export const FullName = styled.h1`
  width: 90%;
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
  display: flex;
  flex-direction: column;
  width: 90%;
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
  font-size: 16px;
  margin: 10px 20px;
`
