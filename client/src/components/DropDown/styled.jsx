import styled from "styled-components"

export const DropDownMenu = styled.div`
  position: absolute;
  top: 13.5vh;
  right: -2vw;
  width: 300px;
  transform: translateX(-45%);
  background-color: #240046;
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
`
export const DropDownItem = styled.button`
  height: 50px;
  width: 90%;
  display: flex;
  align-items: center;
  border-radius: 17px;
  transition: background 800ms, color 800ms;
  padding: 0.5rem;
  margin-bottom: 5%;

  :hover {
    background-color: #9d4edd;
    color: black;
  }
`

export const ModalTitle = styled.h1`
  font-size: 36px;
  color: #1f0037;
  margin-bottom: 2.5%;
`

export const ModalField = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;

  height: 30%;
  padding: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  background: linear-gradient(145deg, #bf8ce6, #e3a6ff);
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
`

export const ModalForm = styled.form`
  width: 100%;
  border-radius: 25px;
  background: #5d00a4;
  box-shadow: inset 21px 21px 42px #430076, inset -21px -21px 42px #7700d2;
  border-radius: 10px;
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
`
export const ModalInput = styled.input`
  grid-column: 2/3;
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 20px;
`

export const ModalLabel = styled.label`
  grid-column: 1/2;
  grid-row: 1/2;
  text-align: left;
  padding-left: 5%;
  font-size: large;
  font-weight: bold;
  font-family: sans-serif;
`
