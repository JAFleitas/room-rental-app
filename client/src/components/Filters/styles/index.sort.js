import styled from "styled-components"

export const Container = styled.div`
  background-color: #e2c8ff;
  border: 1px solid #d822fc3f;
  border-radius: 20px;
  width: 40%;
  margin: 0.5rem auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 70px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`
export const SelectSt = styled.select`
  height: fit-content;
  color: white;
  background: rgb(139, 37, 255);
  background: linear-gradient(
    135deg,
    rgba(139, 37, 255, 1) 0%,
    rgba(156, 69, 255, 1) 46%,
    rgba(173, 102, 255, 1) 100%
  );
  border: none;
  border-radius: 10px;
  padding: 5px;
  margin-left: 15px;

  &:focus {
    background: rgb(139, 37, 255);
  }
`

export const LabelSt = styled.label`
  font-size: 15px;
  font-weight: 900;
  margin-right: 5px;
  color: black;
  padding: 5px;
  border-radius: 15px;
`
