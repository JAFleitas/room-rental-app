import styled from "styled-components"

export const Container = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4,1fr)
  grid-gap: 10px;
  justify-content: space-evenly;
  width: 50%;
  height: 15%;
  margin-top: 8rem;
  border-radius: 15px;
  align-items:center;
  justify-items:center;
  box-shadow: 0 5px 5px rgba(0, e, e, 0.2);
  overflow: hidden;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 0 10px #d8d8d8;
    cursor: pointer;
  }
`
export const ImageContainer = styled.div`
  height: 15%px;
  width: 35%px;
  padding: 20px;

  grid-column: 1;
  grid-row: 1/5;
`

export const Image = styled.img`
  object-fit: contain;
  border-radius: 1rem;
`

export const Title = styled.p`
  grid-column: 2;
  grid-row: 1;
  margin-left: 20px;
  margin-right: 20px;
  color: black;
  font-size: 13px;
`
export const Info = styled.p`
  grid-column: 2;
  grid-row: 2/4;
  margin-left: 20px;
  margin-right: 20px;
  color: black;
  font-size: 10px;
`

export const Price = styled.p`
  grid-column: 2;
  grid-row: 4;
  color: black;
  font-size: 13px;
  justify-self:flex-end;
  display:inline;
  padding:1rem;
`
export const Rating = styled.p`
  grid-column: 2;
  grid-row: 4;
  color: black;
  justify-self:flex-start;
  font-size: 13px;
  display:flex;
  align-items:center;
`
