import styled from "styled-components"

export const Container = styled.div`
  width: 70%;
  margin-left: 2.5%;
  margin-top: 4%;
  margin-bottom: 4%;

  height: fit-content;
  border-radius: 10px;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    width: 90%;
  } ;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 40% 45% 15%;
  background-color: white;
  width: ${({ width }) => width ?? "46%"};

  width: 46%;
  height: fit-content;
  margin: 1rem 0.3rem;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, e, e, 0.2);
  overflow: hidden;

  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 0 10px #4b4b4b;
    cursor: pointer;
  }
  @media screen and (max-width: 1140px) {
    width: 80%;
    margin-left: 10%;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
    margin-left: 5%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 0;
    margin-top: 5%;
  } ;
`

export const CardTitle = styled.h1`
  grid-row: 1/2;
  grid-column: 2/3;
  width: fit-content;
  margin: 15px;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  font-size: 20px;
  font-weight: bold;
`

export const CardInfoContainer = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #d722fc;
  border-radius: 15px;
  padding: 20px;
  margin: 5px;
`

export const CardInfo = styled.h3`
  width: 45%;
  font-size: 18px;
  border-radius: 5px;
`

export const ImageContainer = styled.div`
  grid-row: 1/2;
  grid-column: 1/2;
  height: 100%;
  width: 100%;
  padding: 5px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`
export const RedButton = styled.button`
  grid-column: 1/3;
  grid-row: 3/4;
  color: #ffffff;
  text-justify: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 40%;
  height: 70%;
  /* min-height: 30px; */
  background-color: #cf222e;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  margin-left: 30%;
  margin-top: 1%;
  margin-bottom: 3%;
  transition: 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #cf222e;
  }
`
