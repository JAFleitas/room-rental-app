import styled from "styled-components"

export const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  justify-content: space-around;
  width: 46%;
  height: 250px;
  margin: 1rem 0.3rem;
  border-radius: 15px;
  align-items: center;
  justify-items: center;
  box-shadow: 0 5px 5px rgba(0, e, e, 0.2);
  overflow: hidden;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 0 10px #d8d8d8;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  } ;
`

export const FavoriteContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1.5rem;
  justify-content: space-evenly;
  width: 40%;
  min-width: 310px;
  height: 195px;
  border-radius: 15px;
  align-items: center;
  justify-items: center;
  box-shadow: 0 5px 5px rgba(0, e, e, 0.2);

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01, 1.01);
    box-shadow: 0 0 10px #d8d8d8;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  } ;
`
export const FavoriteImage = styled.img`
  width: 100%;
  height: 90px;
  border-radius: 1rem;
`

export const ImageContainer = styled.div`
  height: 100%;
  width: 40%;
  padding: 5px;
`

export const Image = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 1rem;
`

export const Title = styled.p`
  width: 50%;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  font-size: medium;
  font-weight: bold;
`
export const Info = styled.p`
  width: 40%;
  padding-left: 5px;
  padding-right: 5px;
  color: black;
  font-family: "Times New Roman", Times, serif;
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: left;
`
export const DivPyR = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  gap: 20%;
`
export const Price = styled.p`
  color: black;
  font-size: small;

  padding: 1rem;
`
export const PriceFavorite = styled.div`
  color: black;
  font-size: 1rem;
  width: 40%;
  text-align: right;
`
export const Location = styled.div`
  width: 100%;
  color: black;
  font-family: "Times New Roman", Times, serif;
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`

export const Rating = styled.p`
  color: black;
  font-size: small;
`
