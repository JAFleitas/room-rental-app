import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
  margin-right: 1rem;
  min-height: 500px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
