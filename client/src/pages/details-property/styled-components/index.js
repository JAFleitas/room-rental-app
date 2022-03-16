import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"
export const ContainerPageDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f0f0f0;
  height: 2000px;
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`
export const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  box-shadow: 10px 10px 3px #6f5fca55;

  background-color: #fff;
  width: 80vw;
  height: 30vw;

  min-height: 350px;
  border-radius: 16px;
  padding: 10px;
  @media screen and (max-width: 740px) {
    width: 100%;
    border-radius: 0;
    display: flex;
    height: 60vh;
    box-shadow: none;
    background-color: transparent;
  }
`

export const PrincipalImage = styled.div`
  display: flex;
  margin-right: 5px;
  padding: 5px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 740px) {
    width: 100%;
    height: 100%;
  }
`
export const SecondaryImages = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  & img {
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 740px) {
    display: none;
  }
`

export const Img = styled.img`
  border-radius: 15px;

  filter: brightness(1.2);
  :hover {
    filter: brightness(0.5);
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  padding-top: 20px;
  padding-bottom: 40px;
  border-bottom: 0.5px solid #aaaaaaaa;
  margin-bottom: 20px;
  & h2 {
    font-size: 20px;
    font-weight: 700;

    padding-bottom: 10px;
  }
  & h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    color: #6f5fcacc;
    padding-bottom: 10px;
  }
  & p {
    color: #8f8f8f;
    padding-bottom: 60px;
  }
  @media screen and (max-width: 740px) {
    align-items: center;
  }
`
export const StarRating = styled.div`
  display: flex;
  flex-direction: colum;
  & h5 {
    color: #5f5f5f;
    padding: 5px;
    font-weight: 900;
    & a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
export const AiFillStarSt = styled(AiFillStar)`
  color: #6f5fca;
  margin-top: 8px;
`
export const BotonBack = styled.div`
  border-radius: 50%;
  padding: 20px;
  background-color: #6f5fca;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #0a0a0a;
  font-size: 12px;
  margin-top: 20px;
  flex-direction: column;
  margin-bottom: 10px;
  & button {
    position: relative;
    width: 26px;
    height: 30px;
    &:hover {
      left: -8px;
    }
  }
`

export const ServicesSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #666666;
  & svg {
    font-size: 22px;
    text-align: center;
    position: relative;
    left: 5px;
  }
  & div {
    padding: 20px;
  }
`
export const DivReview = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  & h2 {
    padding-left: 5px;
    padding-top: 2px;
  }
`