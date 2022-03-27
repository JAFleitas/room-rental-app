import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"

export const ContainerCard = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  // margin-top: 40px;
`
export const ContainerStars = styled.div`
  display: flex;
  flex-direction: row;
`

export const FillStarIcon = styled(AiFillStar)`
  width: 24px;
  height: 24px;
  color: gold;
  padding: 4px;
`

export const Title = styled.h3`
  font-weight: 800;
  padding-top: 4px;
  margin-bottom: 8px;
`

export const ContainerComment = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  p {
    color: #aeaeae;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
