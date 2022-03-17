import styled from "styled-components"

export const Search = styled.button`
  display:flex;
  width: 30%;
  height: 70px;
  margin: 0 auto;
  justify-content:center;
  align-items:center;
  

`

export const Text = styled.span`
border-radius: 1rem;
border-color: black;
border-width: 1px;
padding: 0.2rem 0.2rem;
z-index: -1;
`


export const Icon = styled.span`
  
  border-style:solid;
  border-color: pink;
  background-color: white;
  color: pink;
  margin-left:0.5rem;
  padding: 0.3rem;
  border-radius: 9999px;
  z-index: -1;

`

export const Container = styled.form`
  display:flex;
  width: 50%;
  height: 70px;
  margin: 0 auto;
  justify-content:center;
  align-items:center;
  gap:1rem;
  
  border-radius: 2rem;
  padding: 1rem;
  transition: 2s;

  &:hover{
    box-shadow: 2px 2px 2px 1px black;
    border-color:black;
  }

  
  
`
export const Box = styled.div`
display:flex;
flex-direction: column;
width: 20%;
height: 70px;
margin: 0 auto;
justify-items:center;
align-items:center;


`

export const Label = styled.label`
  font-size: large;
  font-weight:bold;
  font-family: sans-serif ;
`
export const Input = styled.input`
border-radius: 0.5rem;
border-color: black;
border-width: 1px;
padding: 0.2rem 0.2rem;
width: 140px;
`



export const SearchButton = styled.button`
  font-size: x-large;
  border-style: solid;
  border-color: pink;
  border-width: 2px;
  background-color: white;
  color: pink;
  align-self: center;
  margin-left:0.5rem;
  padding: 0.3rem;
  border-radius: 9999px;

  &:hover{
    background-color:pink;
    border-color:black;
    color:white;
  }
`