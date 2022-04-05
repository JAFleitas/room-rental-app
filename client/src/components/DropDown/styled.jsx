import styled from "styled-components"
import { Link } from "react-router-dom"

export const DropDownMenu = styled.div`
  position: absolute;
  top: 13.5vh;
  right: -2vw;
  width: 300px;
  transform: translateX(-45%);
  background: linear-gradient(145deg, #cb8fff, #ab79e6);
  border-radius: 17px;
  padding: 1rem;
  overflow: hidden;
  color: white;
  ${({ visibility }) =>
    visibility
      ? `
    visibility: visible;
    `
      : `
    visibility: hidden;
    `};
  /* @media (max-width: 550px) {
    width: 98vw;
    top: 15vh;
    right: -43vw;
  } */
  @media (max-width: 550px) {
    width: 98vw;
    top: 15vh;
    right: -43vw;
  }
`
export const DropDownItem = styled.span`
  height: 50px;
  width: 90%;
  display: flex;
  align-items: center;
  border-radius: 17px;
  transition: background 800ms, color 800ms;
  padding: 0.4rem;
  margin-bottom: 2.5%;
  margin-top: 2.5%;

  :hover {
    background-color: #9d4edd;
    color: black;
  }
  @media (max-width: 550px) {
    width: 100%;
    justify-content: center;
    font-size: 20px;
  }
`
export const Container = styled.div`
  margin: auto auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: "20px";
  margin-bottom: 2rem;

  button {
    height: 50px;
    margin-bottom: 8px;
    svg {
      margin-right: 8px;
      font-size: 24px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  font-family: "Times New Roman", Times, serif;
  font-size: 36px;
  color: #ae74f0;
  margin-bottom: 2.5%;
  font-weight: 800;
  text-shadow: 4px 4px 6px #e0c0ff; ;
`

export const Field = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-bottom: 2.5%;

  height: 30%;
  padding: 20px;
  padding-bottom: 20px;
`

export const Form = styled.form`
  width: 100%;
  border-radius: 25px;
  /* background: rgb(226, 200, 255);
  background: linear-gradient(
    121deg,
    rgba(226, 200, 255, 1) 0%,
    rgba(235, 199, 255, 1) 25%,
    rgba(244, 199, 255, 1) 50%,
    rgba(254, 199, 255, 1) 75%,
    rgba(255, 199, 246, 1) 100%
  ); */
  background: rgb(39, 0, 130);
  background: linear-gradient(
    135deg,
    rgba(39, 0, 130, 1) 0%,
    rgba(61, 0, 130, 1) 25%,
    rgba(84, 0, 130, 1) 50%,
    rgba(106, 0, 130, 1) 75%,
    rgba(128, 0, 130, 1) 100%
  );
  border-radius: 10px;
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`
export const Input = styled.input`
  grid-column: 2/3;
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 4px;
  font-size: 20px;
`

export const Label = styled.label`
  grid-column: 1/2;
  grid-row: 1/2;
  font-size: large;
  font-weight: bold;
  font-family: sans-serif;
  color: #ffffff;
`
export const ButtonFacebook = styled.button`
  display: flex;
  color: #ffffff;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 90%;
  min-height: 30px;
  background-color: #1b74e4;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;

  transition: 0.2s;

  &:hover {
    background-color: #385898;
  }
`
export const ButtonGoogle = styled.button`
  display: flex;
  color: black;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 50%;
  min-height: 30px;
  background-color: white;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  width: 90%;
  transition: 0.5s;

  &:hover {
    background-color: #d9dcdf;
    border: 1px solid #d9dcdfcc;
  }
`
export const SendButton = styled.button`
  color: ${({ signup }) => (signup ? "#000000" : "#ffffff")};
  justify-self: center;
  align-self: center;
  text-justify: center;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 90%;
  height: 30px;
  background-color: ${({ disabled, signup }) =>
    disabled ? "#404040" : signup ? "#e2c8ff" : "#2da44e"};
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;

  transition: 0.2s;

  &:hover {
    background-color: ${({ disabled, signup }) =>
      disabled ? "#404040" : signup ? "#e2c8ffcc" : "#2c974b"};
  }
`
export const RedButton = styled.button`
  color: #ff0000;
  justify-self: center;
  align-self: center;
  text-justify: center;

  box-shadow: rgba(27, 31, 36, 0.1);
  width: 90%;
  min-height: 30px;
  border-radius: 0.5rem;
  font-size: 16px;
  font-weight: normal;
  font-family: sans-serif;
  text-decoration: underline;
  transition: 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #cf222e;
    text-decoration: none;
  }
`
