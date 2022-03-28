import styled from "styled-components"

export const New = styled.button`
  height: 5.6vh;
  width: 14vw;
  min-width: 200px;
  font-size: 4vh;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  color: #13001e;
  border-radius: 17px;
  margin-top: 1.5vh;
  margin-right: -0.75vw;
`

export const WelcomeContainer = styled.div`
  border-radius: 50px;
  background: linear-gradient(145deg, #dfb2ff, #bb95e6);
  width: 70%;
  min-height: 200px;
  margin-left: 15%;
  margin-top: 2%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 720px) and (max-width: 1220px) {
    width: 75%;

    margin-left: 5%;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
`
export const WelcomeTitle = styled.h1`
  font-size: 2rem;
  color: white;
  font-weight: 900;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.34);
  margin-bottom: 2%;
`

export const WelcomeText = styled.p`
  font-size: 1.3rem;
  color: white;
  font-weight: 600;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.34);
  margin-top: 2%;
`
export const Container = styled.div`
  border-radius: 50px;
  width: 70%;
  height: 30%;
  margin-left: 15%;
  margin-top: 2%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 720px) and (max-width: 1220px) {
    width: 90%;
    margin-left: 7.5%;
  }

  @media (max-width: 720px) {
    flex-direction: column;
    width: 90%;
    margin-left: 7.5%;
  }
`

export const DesignContainer = styled.div`
  border-radius: 50px;
  padding-bottom: 3%;
  width: 50%;
  min-width: 150px;
  height: 45%;
  background: linear-gradient(145deg, #dfb2ff, #bb95e6);
`

export const Design = styled.img`
  background-repeat: no-repeat;
  background-size: contain;
`
