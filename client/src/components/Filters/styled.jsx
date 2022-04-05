import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  input {
    width: 3rem;
    border-radius: 5px;
  }
`

export const InputsNumber = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1rem;

  div {
    padding: 0.5rem;
  }

  label {
    padding: 0px 10px;
  }
`

export const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 1rem;

  div {
    margin: 0.5rem;
  }

  label {
    padding: 5px 10px;
  }
`

export const RestartFilterButton = styled.button`
  border: 2px solid #6e5fcb;
  color: #6e5fcb;
  width: 120px;
  border-radius: 10px;
  font-weight: bold;
  background-color: white;
  align-self: center;
  padding: 2px;

  &:hover {
    background-color: #6e5fcb;
    border-color: black;
    color: #000;
  }
`
