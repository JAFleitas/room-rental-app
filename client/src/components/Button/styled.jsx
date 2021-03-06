import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20px;
  width: 80px;
  min-width: 80px;
  min-height: 40px;
  margin-top: 1vh;
  margin-left: 1vw;
  padding: 4px;
  z-index: 150;
  margin-right: 20px;

  border: 1px solid #d822fc3f;
  border-radius: 21px;
  background: #e2c8ff;
  svg {
    color: #000000;
  }
  transition: all 1s;
  &:hover {
    /* border-radius: 21px;
    background: #be86ff; */
    background-color: #eea0fe;
    transition: background-color 1s;
  }

  &:active {
    border-radius: 21px;
    /* background: #be4eff;
    box-shadow: inset 6px 6px 12px #8d3abd, inset -6px -6px 12px #ef62ff; */
    background: #eea0fe;
    box-shadow: inset 5px 5px 10px #d18de0, inset -5px -5px 10px #ffb3ff;
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
  height: 40px;
  width: 40px;
  margin-left: 2px;
  color: black;
  background-color: white;
  border-radius: 50px;
`
export const ProfileImage = styled.img`
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;

  width: 100%;
  height: 100%;
`
