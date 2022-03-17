import styled from "styled-components"

export const FiltersButton = styled.button`
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
  }
`

export const FilterForm = styled.form`
  height: 500px;
  width: 100%;
  border-radius: 25px;
  background: #5d00a4;
  box-shadow: inset 21px 21px 42px #430076, inset -21px -21px 42px #7700d2;
  border-radius: 10px;
  padding-top: 10%;
`

export const ModalTitle = styled.h1`
  font-size: 36px;
  color: #1f0037;
  margin-bottom: 2.5%;
`

export const ModalField = styled.div`
  width: 65%;
  margin-left: 17.5%;
  height: 15%;
  margin-bottom: 5%;
  padding: 5%;
  padding-left: 2%;

  border-radius: 10px;
  background: linear-gradient(145deg, #bf8ce6, #e3a6ff);
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
`

export const ModalLabel = styled.label`
  grid-column: 1/2;
  grid-row: 1/2;
  text-align: left;
  padding-left: 5%;
  font-size: large;
  font-weight: bold;
  font-family: sans-serif;
`
export const ModalSelect = styled.select`
  grid-column: 2/3;
  grid-row: 1/2;
  border-radius: 0.5rem;
  border-color: black;
  border-width: 1px;
  padding: 0.2rem 0.2rem;
  width: 50px;
`

export const CheckBoxWrapper = styled.div`
  position: relative;
`

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`
