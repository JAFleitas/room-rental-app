import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width ?? "260px"};

  h1,
  h2,
  div {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #ddd;
  }

  border-radius: 4px;
  align-items: center;
  justify-items: center;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05, 1.05);

    cursor: pointer;
  }
  @media screen and (max-width: 624px) {
    width: 330px;
  }
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
  width: 100%;
  padding: 5px;
  border-radius: 16px;
  div {
    border-radius: 16px;
    ul {
      li {
        .slick-active button::before {
          color: #ddd;
        }
      }
    }
  }
`

export const Image = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 16px;
  object-fit: fill;
  @media screen and (max-width: 850px) {
    height: 200xp;
  }
`

export const Title = styled.h1`
  width: 100%;
  min-height: 40px;
  color: black;
  font-size: small;
  font-weight: bold;
`
export const Info = styled.p`
  width: 100%;
  color: #ddd;
  font-size: small;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 6px;
`
export const DivPyR = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 6px;
`
export const Price = styled.p`
  font-size: 20px;
  font-size: 800;
  color: #a455ff;
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
  gap: 4px;
`

export const Rating = styled.div`
  color: black;
  font-size: small;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RatingNumber = styled.p`
  font-size: 20px;
  text-align: center;
  margin-left: 5px;
  font-weight: 600;
`
export const HeartContainer = styled.div`
  position: relative;
  top: 60px;
  left: 100px;
  z-index: 1;
  @media (max-width: 621px) {
    left: 130px;
  }
`
