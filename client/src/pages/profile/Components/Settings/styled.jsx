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
    grid-row: 5/10;
    grid-column: 1/2;
  }
`
export const Title = styled.h1`
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
export const ChangePassword = styled.div`
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

export const Input = styled.input`
  width: 80%;
  height: 30px;
  border-radius: 5px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  background-color: #6d6875;
  color: white;
  font-size: 20px;
  border: 1px solid #d0d7de;
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
  &:focus {
    border-color: #0969da;
    outline: none;
    background-color: white;
    color: black;
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
  }
`
export const Button = styled.button`
  margin-left: 15px;
  color: #ffffff;
  justify-self: center;
  align-self: start;
  text-justify: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 50%;
  min-height: 30px;
  background-color: #2da44e;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;

  transition: 0.2s;

  &:hover {
    background-color: #2c974b;
  }
`

export const PasswordError = styled.label`
 font-family: cursive;
 font-size: small;
 color: #6d6875;
 align-self: start;
 margin-left: 15px;

`
