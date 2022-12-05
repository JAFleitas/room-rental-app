import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    
  } ;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 40% 45% 15%;
  background-color: white;
  width: ${({ width }) => width ?? "44%"};

  height: fit-content;
  margin: 0.75rem;
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

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0.5rem;
  grid-row: 3/4;
  grid-column: 1/3;
`
export const Button = styled.button`
  text-justify: center;
  border: none;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  background-color: #ab119fdd;
  color: white;
  padding: 4px 7px;
  font-size: 1rem;
  font-weight: normal;
  font-family: sans-serif;
  transition: 0.2s;

  &:hover {
    background-color: #64075cdd;
  }
`
export const NotRental = styled.div`
  
        display:flex;
        justify-content:center;
        align-content:center;
        width:100%;
        height:500px;
        h2{
          display: flex;
          align-items: center;
        }

        

`