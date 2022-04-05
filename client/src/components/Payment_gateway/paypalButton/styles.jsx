import styled from "styled-components"

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-bottom: 15px;
`

export const PaypalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  & div {
    width: 300px;
  }
`

export const ButtonPayment = styled.div`
  display: flex;
  background-color: #5555ff;
  border-radius: 9px;
  width: 100px;
  height: 40px;
  margin-top: 30px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #fff;
  :hover {
    background-color: #4545d8;
  }
`
export const PaymentContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputSubmit = styled.div`
  display: flex;
  justify-content: center;
  input {
    background-color: #58ae29;
    padding: 10px;
    color: #fff;
  }
  input: hover {
    background-color: #5549;
    padding: 10px;
    color: #fff;
  }
`
