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
    color: black;
  }
`
export const Filter = styled.button`
  font-size: x-large;
  border-style: solid;
  border-color: #e3bdca;
  border-width: 2px;
  background-color: #e3bdca;
  color: black;
  align-self: center;
  margin: 10px;
  padding-bottom: 5px;
  border-radius: 9999px;
  &:hover {
    background-color: black;
    border-color: black;
    color: #e3bdca;
  }
`
export const FilterForm = styled.form`
  height: 700px;
  width: 100%;
  color: white;
  border-radius: 25px;
  background: #283593;
  box-shadow: inset -5px -20px 1021px 100px #6a1b9a;
  border-radius: 10px;
  padding-top: 10%;
`
export const ModalTitle = styled.h1`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 36px;
  color: #1f0037;
  margin-bottom: 2.5%;
`
export const ModalSubtitle = styled.h2`
  font-size: 25px;
  color: white;
  margin-bottom: 2.5%;
`
export const ModalTexto = styled.h3`
  padding-left: 5px;
  color: black;
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
  color: black;
  grid-column: 1;
  grid-row: 1;
  text-align: center;
  padding-left: 5%;
  font-size: 80%;
  font-weight: bold;
  font-family: sans-serif;
  border-radius: 0.5rem;
`
export const ModalSelect = styled.select`
  color: black;
  grid-column: 2/3;
  grid-row: 1/2;
  border-radius: 0.5rem;
  border-width: 1px;
  padding: 0.2rem 0.2rem;
  width: 200px;
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
    border-radius: 50px;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
export const CheckBox = styled.input`
  text-align: center;
  color: black;
  z-index: 1;
  border-radius: 5px;
  width: 50px;
  height: 20px;
  &:checked + ${CheckBoxLabel} {
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
