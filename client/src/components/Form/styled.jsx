import styled from "styled-components"



export const Title= styled.h1`
 width: 20%; */
display: flex;
align-items: center;
justify-content: center;
 background-color: rgba(8, 38, 46, 0.644); 
 color: pink; 
 border-radius: 8px; 
 
 padding: 10px; 
font-size: 20px;
 margin-left: 40%; 
}
`
export const Input= styled.input`
width: 150px
margin:0
`
export const Parrafo = styled.p`
color: red;
font-size: medium;
margin-top: 0;    
`
export const Boton=styled.button`
font-size: x-large;
border-style: solid;
border-color: pink;
border-width: 2px;
background-color: white;
color: pink;
align-self: center;
margin-left: 0.5rem;
padding: 0.3rem;
border-radius: 9999px;

&:hover {
  background-color: pink;
  border-color: black;
  color: white;
}`

export const Home= styled.button`
font-size: x-large;
border-style: solid;
float: left;
border-color: purple;
border-width: 2px;
background-color: white;
color: purple;
align-self: center;
margin-left: 0.2rem;
padding: 0.1rem;
border-radius: 9999px;

&:hover {
  background-color: purple;
  border-color: black;
  color: white;
}`



