import styled from "styled-components"

export const Container = styled.div`
  background-color: #e2c8ff;
  border-radius: 20px;

  width: 40%;
  margin-left: 30%;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
`
export const SelectSt = styled.select`
  height: 35%;
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
  /* margin-right: 15px; */

  &:focus {
    background: rgb(139, 37, 255);
  }
`

export const LabelSt = styled.label`
  font-size: 15px;
  font-weight: 900;
  margin-right: 5px;
  background: rgb(173, 102, 255);
  background: linear-gradient(
    135deg,
    rgba(173, 102, 255, 1) 0%,
    rgba(190, 134, 255, 1) 78%,
    rgba(208, 166, 255, 1) 100%
  );
  color: white;
  padding: 8px;
  border-radius: 15px;
`
