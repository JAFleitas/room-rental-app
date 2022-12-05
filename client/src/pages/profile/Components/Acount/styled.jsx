import styled from "styled-components"





export const WhiteButton = styled.button`
  justify-self: center;
  align-self: center;
  text-justify: center;

  border-radius: 0.5rem;

  width: 30%;
  min-height: 30px;
  background-color: #a455ff ;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  
  transition: 0.2s;
  padding: 6px;

  &:hover {
    background-color: #8d2bfd;
    
  }
  
  @media (max-width: 720px){
    width: 100%;
  }
`

export const RedButton = styled.button`
 
  justify-self: center;
  align-self: center;
  text-justify: center;

  border-radius: 0.5rem;

  width: 30%;
  min-height: 30px;
  background-color: #cf222e;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  
  transition: 0.2s;
  padding: 6px;

  &:hover {
    background-color: #810e15;
    
  }
  
  @media (max-width: 720px){
    width: 100%;
  }
`
