import styled from "styled-components"

export const Container = styled.button`
  grid-column: 3/4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6vh;
  width: 5vw;
  min-width: 80px;
  min-height: 40px;
  /* padding: 0.5vw; */
  margin-top: 2vh;
  margin-left: 1vw;

  border-radius: 21px;
  background: linear-gradient(145deg, #cb53ff, #ab46e6);
  box-shadow: 6px 6px 12px #8938b8, -6px -6px 12px #f364ff;

  &:hover {
    border-radius: 21px;
    background: linear-gradient(145deg, #ab46e6, #cb53ff);
    box-shadow: 6px 6px 12px #8d3abd, -6px -6px 12px #ef62ff;
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
