import styled from "styled-components"

export const ContainerMapAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 10px;
  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`
export const ContainerMap = styled.div`
  width: 80%;
  max-width: 400px;
  height: 200px;
  background-color: #000;
  border-radius: 4px;
  @media screen and (max-width: 550px) {
    width: 100%;
    max-width: 100%;
  }
`
