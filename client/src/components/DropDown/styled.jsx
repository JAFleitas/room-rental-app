import styled from "styled-components"
import { Link } from "react-router-dom"

export const DropDownMenu = styled.div`
  position: absolute;
  top: 80px;
  right: -2vw;
  width: 300px;
  transform: translateX(-45%);
  background: linear-gradient(145deg, #100020, #101010);
  border-radius: 17px;
  padding: 1rem;
  overflow: hidden;

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
  @media (min-width: 1300px) {
    right: inherit;
  }
`
export const DropDownItem = styled.span`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  transition: background 300ms, color 800ms;
  padding: 10px;
  margin-bottom: 2.5%;
  margin-top: 2.5%;

  :hover {
    background-color: #470180;
  }
  @media (max-width: 550px) {
    width: 100%;
    justify-content: center;
    font-size: 20px;
  }
`
export const Container = styled.div`
  margin: auto;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-top: 40px;

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
  color: transparent;
  background: #ccc;
  background: linear-gradient(90deg, #43048a, #b574ff, #43048a);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: 800;
`

export const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 30px;
`
export const Input = styled.input`
  width: 343.18px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 4px;
  font-size: 20px;
  background: #202020;
`

export const Label = styled.label`
  font-size: large;
  font-weight: bold;
  font-family: sans-serif;
  color: #a455ff;
`
export const ButtonFacebook = styled.button`
  display: flex;
  color: #fff;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 0.5rem;
  border: none;
  width: 343.18px;
  min-height: 30px;
  background-color: #1b74e4;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;

  transition: 0.2s;

  &:hover {
    background-color: #4e9cfa;
  }
`
export const ButtonGoogle = styled.button`
  display: flex;
  color: #101010;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border-radius: 0.5rem;

  width: 343.18px;
  min-height: 30px;
  background: #cccaca;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;

  transition: 0.5s;

  &:hover {
    background-color: #fff;
  }
`
export const SendButton = styled.button`
  color: ${({ signup }) => (signup ? "#f0f0f0" : "#ffffff")};
  justify-self: center;
  align-self: center;
  text-justify: center;
  border-radius: 0.5rem;
  border: none;
  width: 343.18px;

  background-color: ${({ disabled, signup }) =>
    disabled ? "#404040" : signup ? "#a455ff;" : "#2da44e"};
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;

  transition: 0.2s;

  &:hover {
    background-color: ${({ disabled, signup }) =>
      disabled ? "#404040" : signup ? "#4e0c99;" : "#2c974b"};
  }
`
export const RedButton = styled.button`
  color: #ff0000;
  justify-self: center;
  align-self: center;
  text-justify: center;

  box-shadow: rgba(27, 31, 36, 0.1);
  width: 343.18px;
  min-height: 30px;
  border-radius: 0.5rem;
  font-size: 16px;
  font-weight: normal;
  font-family: sans-serif;
  text-decoration: underline;
  transition: 0.2s;

  &:hover {
    color: #cf222e;
    text-decoration: none;
  }
`
