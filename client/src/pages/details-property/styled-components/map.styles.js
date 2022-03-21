import styled from "styled-components"

export const ContainerMapAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 10px;
  z-index: 1;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ContainerMap = styled.div`
  width: 80%;
  max-width: 400px;
  height: 200px;

  position: sticky;
  border-radius: 4px;
  @media screen and (max-width: 550px) {
    width: 100%;
    max-width: 100%;
  }
`
