import styled from "styled-components"

export const Container = styled.div`
  background: rgb(110, 95, 203);
  background: linear-gradient(
    0deg,
    rgba(110, 95, 203, 1) 0%,
    rgba(15, 17, 17, 1) 100%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100px;
`
export const SelectSt = styled.select`
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  padding: 4px;
  margin: 4px;

  font-family: "Times New Roman", Times, serif;
`

export const LabelSt = styled.label`
  font-size: 16px;
  font-weight: 900;
  margin-right: 4px;
  font-family: "Times New Roman", Times, serif;
  color: #0033da;
  padding-top: 4px;
`
