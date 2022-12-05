import styled from "styled-components"

export const ContainerPaginated = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 80px;
  align-items: center;
  color: #2b2929;
  background-color: transparent;
  margin-top: 150px;
  /* background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.0865616588432247) 100%
  ); */
`

export const ButtonPage = styled.button`
  border: none;
  border-radius: none;
  color: ${({ disabled }) => (disabled ? "#101010" : "#a455ff")};
  background: ${({ disabled }) => (disabled ? "#202020" : "none")};
  padding: 0px;
  height: 50%;
  width: 120px;
  border: 1px solid #2b2929;
  border-radius: ${({ radius }) => (radius ? radius : "none")};
  border-left: ${({ left }) => (left ? left : "none")};
  border-right: ${({ right }) => (right ? right : "none")};
  &:hover {
    cursor: ${({ disabled }) => (disabled ? null : "pointer")};
    background: ${({ disabled }) =>
      disabled ? null : "linear-gradient(to bottom, #59487eaa, transparent)"};
  }
`

export const LabelPage = styled.label`
  text-decoration: ${({ decoration }) => (decoration ? decoration : "none")};
  border: ${({ border }) => (border ? border : "none")};
  border-left: ${({ left }) => (left ? left : "none")};
  border-right: ${({ right }) => (right ? right : "none")};
  border-radius: none;
  height: 50%;
  text-align: center;
  align-self: center;
  width: 40px;
  color: #a455ff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OutOf = styled.div`
  background-color: ${({ br }) => (br ? br : "none")};
  border: ${({ border }) => (border ? border : "none")};
  border-left: ${({ left }) => (left ? left : "none")};
  border-right: ${({ right }) => (right ? right : "none")};
  border-radius: none;
  height: 50%;
  color:#a455ff;
  display: flex;
  align-items: center;
  justify-content: center;
`
