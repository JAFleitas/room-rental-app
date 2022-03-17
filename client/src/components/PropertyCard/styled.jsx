import styled from "styled-components"

export const Container = styled.div`
  background-color: white;


  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  justify-content: space-evenly;
  width: 50%;
  height: 250px;
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
  height: 100%;
  width: 40%;
  padding: 5px;


`

export const Image = styled.img`
  object-fit: contain;
  border-radius: 1rem;
`

export const Title = styled.p`
width: 50%;
padding-left :5px;
  padding-right :5px;
  color: black;
  font-size: x-large;
`
export const Info = styled.p`
  width: 50%;
  padding-left :5px;
  padding-right :5px;
  color: black;
  font-family: 'Times New Roman', Times, serif;
  font-size: medium;

`
export const DivPyR =styled.div`
display: flex;
width: 40%;
align-items: center;
justify-content: center;
gap:20%;




`
export const Price = styled.p`

  color: black;
  font-size: 13px;

  padding: 1rem;
`
export const Rating = styled.p`
  color: black;
  font-size: 13px;


`
