import styled from "styled-components"



export const Label = styled.h3`
  font-size: 17px;
  font-weight: bold;
  color: #a455ff;
  padding: 4px;
  overflow: hidden;

`

export const FullName = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  border-radius: 15px;
  border: 1px #a455ff solid;
  text-align: center;
  color:transparent;
  background: #ccc;
  background: linear-gradient(90deg, #43048a, #b574ff, #43048a);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:20px;
  padding: 4px;
 

`

export const Info = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding: 4px 20px;
  border: 1px solid #a455ff;
  border-radius:6px;
  width: 160px;

  input {
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    max-width: 160px;
    color :#fff

  }
 
`

export const ButtonEdit = styled.div`
  
  text-align: right;
  padding: 5px;
  color: #101010;
  cursor: pointer;
  border-radius: 5px;
  background: ${props => (props.bgColor ? "#8325a0" :  "linear-gradient(45deg,#a455ffb0 60% ,#c99affb2) ")};
  font-size: 16px;
  font-weight: 600;
  padding: 6px 20px;
  
  :hover {
    background: ${props => (props.bgColor ? "#cc25ff" : "linear-gradient(45deg,#a455ff 60% ,#c99aff) ")};
  }
  transition: background .3s ease-in-out;
`

export const ContainerLabel = styled.article`
  display: flex;
  justify-content: space-between;
  gap:20px;

`