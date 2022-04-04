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
  width: 100%;
  margin: 0.5rem;
  justify-content: space-around;
  flex-wrap: wrap;

  @media screen and (max-width: 525px) {
    flex-direction: column;

    div {
      width: 95%;
    }
  } ;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  background-color: #e2c8ff;
  border-radius: 1rem;
  padding: 1rem;
  transition: 1s;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 70px;

  padding-left: 0.6rem;
  padding-right: 0.6rem;
  align-items: center;
  border-radius: 1rem;
  transition: 0.5s;
  &:hover {
    background-color: #a455ff;
  }
`

export const Label = styled.label`
  font-size: medium;
  font-weight: normal;
  font-family: sans-serif;
  color: white;
  padding: 3px;
  padding-left: 6px;
  padding-right: 6px;
  margin-bottom: 2%;
  background-color: #a455ff;
  border-radius: 15px;
`
export const Input = styled.input`
  border-radius: 0.5rem;
  border-color: black;
  border-width: 1px;
  padding: 0.2rem 0.2rem;
  width: 100%;
  color: black;
  outline: none;
  font-family: "Times New Roman", Times, serif;
  font-weight: 800;
`

export const SearchButton = styled.button`
  font-size: x-large;
  border-style: solid;
  border-color: #6e5fcb;
  border-width: 2px;
  background-color: white;
  color: #6e5fcb;
  align-self: center;
  margin-left: 0.5rem;
  padding: 0.3rem;
  border-radius: 9999px;

  &:hover {
    background-color: #6e5fcb;
    border-color: black;
    color: #000;
  }
`
