import { Link } from "react-router-dom"
import styled from "styled-components"
import image3 from "../../assets/Background-images/bckgr03.jpg"

export const PageContainer = styled.div`
  height: fit-content;
  min-height: 100vh;
  width: 100%;
  background: rgb(199, 250, 255);
  background: linear-gradient(
    135deg,
    rgba(199, 250, 255, 1) 0%,
    rgba(199, 240, 255, 1) 15%,
    rgba(199, 230, 255, 1) 30%,
    rgba(199, 214, 255, 1) 45%,
    rgba(199, 202, 255, 1) 60%,
    rgba(206, 199, 255, 1) 75%,
    rgba(215, 199, 255, 1) 90%,
    rgba(235, 199, 255, 1) 100%
  );
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(21, 10vh);

  /* @media (max-width: 1080px) {
    grid-template-rows: repeat(21, 8vh);
  } */
`
export const WelcomeTitle = styled.h1`
  grid-column: 4/8;
  grid-row: 1/3;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 10px;
  border-radius: 10px;
  width: 80%;

  margin-left: 10%;
  font-size: 40px;
  text-align: center;
  background: linear-gradient(145deg, #dfb2ff, #bb95e6);
  color: white;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.34);
  font-weight: 600;
  @media (max-width: 1280px) {
    width: 100%;
    height: 50%;
    margin-left: 0;
    font-size: 36px;
  }
  @media (max-width: 980px) {
    width: 100%;
    height: 50%;
    margin-left: 0;
    font-size: 30px;
  }
  @media (max-width: 780px) {
    grid-column: 3/9;
  }
`
export const WelcomeSubtitle = styled.h1`
  grid-column: 3/9;
  grid-row: 2/4;
  margin-top: 8%;
  padding: 10px;
  border-radius: 10px;
  height: fit-content;
  font-size: 28px;
  text-align: center;
  background: linear-gradient(145deg, #dfb2ff, #bb95e6);
  color: white;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.34);
  font-weight: 600;
  @media (max-width: 1280px) {
    width: 100%;
    height: 70%;
    margin-left: 0;
    font-size: 24px;
  }
  @media (max-width: 980px) {
    width: 100%;
    height: 70%;
    margin-left: 0;
    font-size: 20px;
  }
  @media (max-width: 780px) {
    grid-column: 2/10;
  }
`
export const WelcomeDesignContainer = styled.div`
  grid-column: 3/8;
  grid-row: 4/11;
  border-radius: 20px;
  /* background: linear-gradient(145deg, #dfb2ff, #bb95e6); */
  width: 60%;
  height: 100%;
  margin: 20%;
  margin-top: 0%;
  margin-bottom: 0%;
  /* padding: 45px; */
  padding-bottom: 25px;
  z-index: 10;
  display: flex;
  justify-content: center;
  @media (max-width: 1280px) {
    width: 60%;
    height: 80%;
    margin-top: 10%;
    padding: 10px;

    margin-left: 20%;
  }
  @media (max-width: 980px) {
    height: 60%;
  }
  @media (max-width: 760px) {
    width: 80%;
    height: 60%;
  }
  @media (max-width: 580px) {
    height: 55%;
    width: 90%;
  }
`
export const Design = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  margin-left: 0;
  @media (max-width: 1280px) {
    height: 100%;
  }
  @media (max-width: 1080px) {
    height: 90%;
    padding: 0px;
  }
  @media (max-width: 980px) {
    height: 90%;
  }
  @media (max-width: 760px) {
    height: 100%;
  }
`
export const WelcomeText = styled.div`
  grid-column: 4/8;
  grid-row: 11/17;
  color: white;
  font-weight: 600;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.34);
  background: linear-gradient(145deg, #dfb2ff, #bb95e6);
  border-radius: 20px;
  padding: 8px;
  width: 80%;
  height: 70%;
  margin-left: 5%;
  margin-top: 10%;
  margin-bottom: 10%;
  font-size: 22px;
  z-index: 10;
  display: flex;
  align-items: center;
  @media (max-width: 1280px) {
    width: 80%;
    font-size: 20px;
  }
  @media (max-width: 980px) {
    grid-column: 3/9;
    height: 55%;
  }
  @media (max-width: 780px) {
    width: 80%;
    font-size: 18px;
    height: 60%;
  }
  @media (max-width: 600px) {
    width: 85%;
    font-size: 18px;
    height: 75%;
  }
`
export const LittleImageContainer = styled.div`
  grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row};
  border-radius: 25px;
  width: 80%;
  margin: 10%;
  height: 80%;

  overflow: hidden;
  z-index: 3;
`
export const ToHome = styled(Link)`
  /* grid-column: 4/8;
  grid-row: 17/18; */
  width: 50%;
  /* margin-left: 25%; */
  text-align: center;
  padding: 8px;
  font-size: 36px;
  font-weight: 900;
  border-radius: 30px;
  color: white;
  background-color: #d722fc;
  z-index: 10;
  @media (max-width: 1280px) {
    width: 80%;
  }
  @media (max-width: 980px) {
    width: 70%;
  }
  @media (max-width: 780px) {
    width: 70%;
    font-size: 30px;
  }
`
export const ButtonContainer = styled.div`
  grid-column: 4/8;
  grid-row: 17/20;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    121deg,
    rgba(226, 200, 255, 1) 0%,
    rgba(235, 199, 255, 1) 25%,
    rgba(244, 199, 255, 1) 50%,
    rgba(254, 199, 255, 1) 75%,
    rgba(255, 199, 246, 1) 100%
  );
  border-radius: 30px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1280px) {
    width: 90%;
    margin-left: 5%;
  }
  @media (max-width: 780px) {
    width: 90%;
    margin-left: 5%;
    height: 60%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  /* @media (max-width: 1280px) {
    width: 90%;
  }
  @media (max-width: 980px) {
    width: 90%;
  }
  @media (max-width: 980px) {
    width: 70%;
  } */
`
