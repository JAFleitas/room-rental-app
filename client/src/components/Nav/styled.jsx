import styled from "styled-components"

export const Navigator = styled.nav`
  background-color: #c96cff;
  display: grid;
  grid-template-columns: 25% 60% 15%;
  height: 10vh;
`

export const IconContainer = styled.div`
  height: 7vh;
  width: 18vw;
  min-width: 250px;
  margin-left: 1.5vw;
  margin-top: 1.5vh;
  margin-bottom: 1.5vh;
  grid-column: 1/2;

  display: flex;
  justify-content: space-around;

  border-radius: 21px;
  background: linear-gradient(145deg, #cb53ff, #ab46e6);
  box-shadow: 6px 6px 12px #8938b8, -6px -6px 12px #f364ff;
`

export const Icon = styled.img`
  height: 5.6vh;
  min-height: 40px;
  width: 2.5vw;
  min-width: 40px;
  margin-top: 0.7vh;
  margin-left: 0.75vw;

  background-repeat: no-repeat;
  background-size: contain;
`

export const Title = styled.div`
  height: 5.6vh;
  width: 14vw;
  min-width: 200px;
  font-size: 4vh;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  color: black;
  border-radius: 17px;
  margin-top: 0.7vh;
  margin-left: -0.75vw;
`
