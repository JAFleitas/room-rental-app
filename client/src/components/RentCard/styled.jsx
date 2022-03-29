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
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 50% 50%;
  background-color: white;
  /* display: flex;
  flex-direction: column;
  flex-wrap: wrap; */
  width: ${({ width }) => width ?? "46%"};

  /* justify-content: space-around; */
  width: 46%;
  height: 300px;
  margin: 1rem 0.3rem;
  border-radius: 15px;
  /* align-items: center;
  justify-items: center; */
  box-shadow: 0 5px 5px rgba(0, e, e, 0.2);
  overflow: hidden;

  transition: all 0.4s ease-in-out;
  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 0 10px #4b4b4b;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
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
  padding: 10px;
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

// discount: null
// final_date: "2022-03-23T03:00:00.000Z"
// final_price: 160
// id: "8ef1f46a-1b52-4961-9a07-81a42467c2b1"
// paymenthMethodId: 1
// propertyID: "0ec259b5-1ca1-4cc7-956f-04b2c2106c08"
// start_date: "2022-03-15T03:00:00.000Z"
// status: "active"
// userId: "3ae3b92c-af90-40b4-a5de-8d8f1bb4096e"
