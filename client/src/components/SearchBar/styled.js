import styled from "styled-components"

export const Search = styled.button`
  display: flex;
  width: 30%;
  height: 70px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`

export const Text = styled.span`
  border-radius: 1rem;
  border-color: black;
  border-width: 1px;
  padding: 0.2rem 0.2rem;
  z-index: -1;
`

export const Icon = styled.span`
  border-style: solid;
  border-color: #24292f;
  background-color: white;
  color: #24292f;
  margin-left: 0.5rem;
  padding: 0.3rem;
  border-radius: 9999px;
  z-index: -1;
`

export const ContainerSearchBar = styled.div`
  display: flex;
  max-width: 400px;
  gap:80px;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
  z-index: 100;
  background: #0f0f0f;
  @media screen and (max-width: 768px){

    background: transparent;
  }

  

 
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width:40%;
  max-width: 500px;
  min-width: 300px;
  border-radius: 1rem;
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0px 0px 21px -11px #a455ff8b;
  z-index: 100;
  background: #0f0f0f;
  align-items: center;
  position: relative;
  top:-50%;
  @media screen and (max-width: 768px){
     position: initial;
     top:0;
     box-shadow: none;
     background: transparent;
     width: 100%;
     margin-bottom:400px;
    }
 
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  transition: 0.5s;
  &:hover {
   
  }
 
`

export const Label = styled.label`
  font-size: 1rem;
    font-weight: 800;
    font-family: sans-serif;
    color: #a455ff;
    padding: 3px;
    padding-left: 6px;
    padding-right: 6px;
    margin-bottom: 2%;
;

`
export const Input = styled.input`
  font-weight: 800;
  width: 100%;
  outline: none;
  font-weight: 800;
  background: transparent;
  border: 0.5px solid #a455ff6b;
  padding: 8px;
  border-radius: 6px;
  &:hover {
    border-color: #b87aff;
    color: #b87aff;
  }
`

export const SearchButton = styled.button`
  
    border:0.5px solid #a455ff6b;
    background-color: transparent;
    color: #a455ff;
    align-self: center;
   
    padding: 8px;
    border-radius: 6px;
    display: flex;
    width: 100%;
    gap:4px;
    justify-content: center;
    svg{
      font-size:20px;
    }
  &:hover {
    border-color: #b87aff;
    color: #b87aff;
  }
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

`
export const ButtonFilterShowMovil = styled.button`
  @media screen and (min-width: 775px) {
    display: none;
  }
`
export const ButtonFilterShow = styled.button`
  @media screen and (max-width: 775px) {
    display: none;
  }
`
export const Article = styled.section`
 display: flex;
 flex-direction: column;
 padding: 40px 0px;
 width: 100%;
 align-items: flex-start;
 justify-content: center;
 h2{
   text-align: center;
    font-size: 30px;
    font-weight: 900;
    color: #6f5fcacc;
    padding-bottom: 10px;
    color:transparent;
    background: #ccc;
    background: linear-gradient(90deg, #43048a, #b574ff, #43048a);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
 }
 @media screen and (max-width: 768px){
  align-items: center;
  h2{
    padding-top :100px;
  }
    }




`
export const ImageSearch = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    object-position: 0 70%;
    
`
export const ImageContainer =styled.article`
    position: relative;
    width: 80%;
    height: 600px;
    left: 20%;
    @media screen and (max-width: 768px){
      display: none;
    }
   

`
export const Section = styled.section`
    display: flex;
`