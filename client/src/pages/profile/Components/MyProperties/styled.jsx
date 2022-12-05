import styled from "styled-components"




export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  gap:40px;
  height: 600px;
  max-width: 800px;
  padding: 0px 10px;
`

export const RedButton = styled.button`
  
  justify-self: center;
  align-self: center;
  text-justify: center;
  border-radius: 6px;
  background-color: #cf222e;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  transition: 0.2s;
  padding: 8px;
  &:hover {
    background-color:#69151b;;
   
  }
`
export const WhiteButton = styled.button`
  display: flex;
  color: black;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 30%;
  min-height: 30px;
  background-color: white;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  margin: 1rem auto;

  transition: 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:12px;
  
  
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 270px;
  gap:16px;
  button {
    width: 100%;
  }
`
export const EditButton = styled(RedButton)`
  
  padding: 5px;
  
  cursor: pointer;
  border-radius: 5px;
  background:  linear-gradient(45deg,#a455ffb0 60% ,#c99affb2) ;
 
  padding: 8px 20px;
  transition: all .5s ease-in-out;
  
  :hover {
    background: linear-gradient(45deg,#a455ff 60% ,#c99aff) ;
  }
`
