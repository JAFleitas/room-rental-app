import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px;
  margin: 1rem;
  width: 90%;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

export const Star = styled(AiFillStar)`
  color: gold;
`
export const DivStar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
  svg {
    width: 100px;
    height: 100px;
  }
  h1 {
    color: black;
    font-size: 120px;
    font-weight: 100;
  }
`
export const ContainerRating = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ButtonSt = styled.button`
  color: #6565e3;
  &:hover {
    color: #0000fa;
  }
`
