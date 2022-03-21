import styled from "styled-components"

export const Container = styled.button`
  grid-column: 3/4;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20px;
  width: 100px;
  min-width: 80px;
  min-height: 40px;
  margin-top: 1vh;
  margin-left: 1vw;
  padding: 4px;
  z-index: 50;

  border-radius: 21px;
  background: #0f1111;
  svg {
    color: #ededed;
  }
  transition: all 1s;
  &:hover {
    border-radius: 21px;
    background: #24292f;
  }

  &:active {
    border-radius: 21px;
    background: #be4eff;
    box-shadow: inset 6px 6px 12px #8d3abd, inset -6px -6px 12px #ef62ff;
  }
`

export const Icon = styled.div`
  color: black;
  font-size: 3.5vh;
  min-height: 20px;
  font-weight: 800;
  margin-left: 0.3vw;
`

export const ImageContainer = styled.div`
  height: 3.5vh;
  min-height: 24px;
  width: 1.65vw;
  min-width: 24px;
  margin-left: 2px;
  color: black;
  background-color: white;
  border-radius: 50px;
  font-size: 25px;
`
// export const ProfileImage = styled.img`
//   background-repeat: no-repeat;
//   background-size: contain;
// `
