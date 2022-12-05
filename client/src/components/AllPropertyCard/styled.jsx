import styled from "styled-components"

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 270px));
  width: 100%;
  justify-content: flex-start;
  min-height: 500px;
  @media screen and (max-width:624px) {
    display: flex;
    flex-direction: column;
align-items: center;
    
  }
 
`
