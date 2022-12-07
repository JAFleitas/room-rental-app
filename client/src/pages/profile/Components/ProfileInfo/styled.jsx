import styled from "styled-components"

export const Label = styled.label`
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
  color: transparent;
  background: #ccc;
  background: linear-gradient(90deg, #43048a, #b574ff, #43048a);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 2rem;
    font-weight: 600;
  }
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 4px;
`

export const Info = styled.h3`
  font-size: 16px;
  font-weight: bold;
  padding: 4px 20px;
  border: 1px solid #a455ff;
  border-radius: 6px;
  width: 300px;
  overflow: hidden;

  input {
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    max-width: 160px;
    color: #fff;
  }
  @media (max-width: 720px) {
    input {
      text-align: center;
    }
    text-align: center;
  }
  @media (max-width: 760px) {
    width: 170px;
  }
`

export const ButtonEdit = styled.div`
  text-align: center;
  padding: 5px;

  cursor: pointer;
  border-radius: 5px;
  background: ${props =>
    props.bgColor
      ? "#8325a0"
      : "linear-gradient(35deg,#5b04be 75% ,#1a0038b1)"};
  font-size: 14px;
  font-weight: 500;
  padding: 6px 20px;
  font-family: cursive;
  :hover {
    background: ${props =>
      props.bgColor
        ? "#cc25ff"
        : "linear-gradient(35deg,#6504d4 75% ,#380275b0)"};
  }
  transition: background 0.3s ease-in-out;
  @media (max-width: 720px) {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`

export const ContainerLabel = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`
