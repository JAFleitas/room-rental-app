import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
  right: 0;
  left: 0;
`

export const ContainerMap = styled.div`
  display: flex;
  width: 400px;
  height: 200px;
  flex-direction: column;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding-bottom: 60px;
  min-width: 400px;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const LabelSt = styled.label`
  color: ${({ error }) => (error ? "#ff0000" : "#acacac")};
  font-size: 16px;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
  margin: 4px;
`
export const InputSt = styled.input`
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  margin: 4px;
  font-weight: 800;
  font-family: "Times New Roman", Times, serif;
  outline: none;
  width: 400px;
`
export const TextDescription = styled.textarea`
  border: 1px solid #aaaaaa;
  border-radius: 4px;
  width: 400px;
  font-weight: 800;
  font-family: "Times New Roman", Times, serif;
  height: 100px;
  resize: none;
  outline: none;
`

export const ContainerImgAndMap = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 24px;
    font-weight: 800;
    font-family: Arial, Helvetica, sans-serif;
    color: #cfcfcf;
  }
`

export const ButtonSt = styled.button`
  border-radius: 4px;
  padding: 8px;
  background: ${({ disabled }) => (disabled ? "#ccc" : "#5555ff")};
  color: #f0f0f0;
  transition: 0.7s;
  margin-top: 8px;
  :hover {
    background: ${({ disabled }) => (disabled ? "#ccc" : "#8766f0")};
  }
`
