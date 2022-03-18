import styled from "styled-components"

export const DropDownMenu = styled.div`
  position: absolute;
  top: 13.5vh;
  right: -0vw;
  width: 300px;
  transform: translateX(-45%);
  background-color: #240046;
  border-radius: 17px;
  padding: 1rem;
  overflow: hidden;
  color: white;
`
export const DropDownItem = styled.div`
  height: 50px;
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
