import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 2em;
  align-items: start;
  padding-top: 2em;
  padding-bottom: 2em;
  @media (max-width: 1150px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerMap = styled.div`
  z-index: 0;
  display: flex;
  width: 400px;
  height: 200px;
  flex-direction: column;
`

export const FormContainer = styled.form`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  min-width: 400px;
  padding-bottom: 30px;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const LabelSt = styled.label`
  color: ${({ error }) => (error ? "#ff0000" : "#6BA7F4")};
  font-size: 16px;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
  margin: 10px 4px;
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
    color: #4b93f0;
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
export const FormPropertyContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-bottom: 50px;
  padding-left: 100px;
  padding-right: 100px;
`
export const ContainerImages = styled.div`
  background-color: #fff;
  border-bottom: rgb(226, 225, 223) 2px solid;
  border-left: rgb(226, 225, 223) 1px solid;
  border-right: rgb(226, 225, 223) 1px solid;
  border-radius: 10px;
  display: flex;
  height: auto;
  padding-bottom: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  max-width: 411px;
  justify-content: center;
`

export const BtnDeleteImage = styled.div`
  background-image: url(https://icon-library.com/images/delete-icon-png/delete-icon-png-16.jpg);
  padding: 5px;
  width: 20px;
  height: 20px;
  margin: 3px;
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  right: 5px;
`

export const CardImage = styled.div`
  width: 100px;
  height: 100px;
  margin: 5px;
  background-image: url(${props => (props.photo ? props.photo : null)});
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 5;
  -webkit-transition: 1s linear;
  transition: 1s linear;
  :hover {
    -webkit-box-shadow: 4px 4px 2px 1px;
  }
`
