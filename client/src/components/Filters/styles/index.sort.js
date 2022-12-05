import styled from "styled-components"

export const Container = styled.div`
  
 
  width: 40%;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`
export const SelectSt = styled.select`
  width: 300px;
  color: #0f0f0f;
  
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin-left: 15px;

  &:focus {
    background: #ccc
  }
`

export const LabelSt = styled.label`
  font-size: 15px;
  font-weight: 900;
  margin-right: 20px;
  color: #a455ff;
  width: 200px;
`
