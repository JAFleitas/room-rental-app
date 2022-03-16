import styled from "styled-components"

export const Container = styled.button`
  grid-column: 3/4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6vh;
  width: 7vw;
  min-width: 80px;
  min-height: 40px;
  /* padding: 0.5vw; */
  margin-top: 2vh;
  margin-left: 1vw;

  border-radius: 26px;
  background: linear-gradient(145deg, #e17c97, #bd687f);
  box-shadow: 5px 5px 10px #915061, -5px -5px 10px #ff98b9;
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
