import styled from "styled-components"

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;
  margin-right: 1rem;
  min-height: 1134px;
  align-content: flex-start;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`
