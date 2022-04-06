import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"
import DatePicker from "react-datepicker"
import { Link } from "react-router-dom"
import { BsFillPlusCircleFill } from "react-icons/bs"

export const Container = styled.div`
  width: 50%;
  min-width: 800px;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border: 1px solid #d822fc3f;

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5%;

  @media (max-width: 700px) {
    width: 90%;
    min-width: 500px;
  }
`

export const Header = styled.span`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
  border: 1px solid #d722fc;
  border-radius: 10px;
`

export const Price = styled.h3`
  width: 50%;
  font-size: 25px;
`

export const IconStar = styled(AiFillStar)`
  font-size: 28px;
  color: #d722fc;
`

export const Stars = styled.h3`
  width: 30%;
  font-size: 25px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`
export const Form = styled.div`
  width: 95%;
  padding: 20px;
  /* border: 1px solid #d722fc; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 5%;
  margin-top: 2%;
`

export const FormField = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2%;
`

export const FormSelect = styled.select`
  padding: 5px;
  border-radius: 15px;
  border: 1px solid transparent;
`
export const FormInput = styled.input`
  padding: 5px;
  border-radius: 15px;
  border: 1px solid transparent;
`

export const FormLabel = styled.label`
  font-size: 18px;
  padding: 5px;
  color: #d722fc;
  background-color: white;
  border-radius: 10px;
  margin-right: 50px;
`
export const DateManager = styled(DatePicker)`
  border-radius: 5px;
  padding: 5px;
`
export const SubmitButton = styled.button`
  width: 30%;
  padding: 5px;
  align-self: center;
  margin-top: 3%;
  background-color: ${({ disabled }) => (disabled ? "#aaa" : "#d722fc")};
  border-radius: 15px;
  border: 1px solid transparent;
  color: white;
  margin-left: -5px;

  &:hover {
    border-radius: 16.5px;
    background: ${({ disabled }) =>
      disabled ? "#aaa" : "linear-gradient(145deg, #c21fe3, #e624ff)"};
  }
  &:focus {
    border-radius: 18px;
    background: #d722fc;
    box-shadow: inset 5px 5px 10px #b71dd6, inset -5px -5px 10px #f727ff;
  }
`
export const PaymentMethodsContainer = styled.div`
  /* width: 80%; */
  padding: 15px;
  padding-top: 35px;
  padding-bottom: 35px;

  height: 50px;
  align-self: center;
  background-color: #d0a6ff;
  border-radius: 10px;
  border: 1px solid #d722fc;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const PaymentMethod = styled.div`
  background: rgb(139, 37, 255);
  background: linear-gradient(
    90deg,
    rgba(139, 37, 255, 1) 0%,
    rgba(173, 102, 255, 1) 100%
  );
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 5px;
  font-size: 1.4rem;
`

export const PaymentMethodCheck = styled.input`
  background-color: #d722fc;
  border-radius: 15px;
  border: 1px solid transparent;
`

export const PaymentMethodName = styled.label`
  font-size: 15px;
  color: white;
  margin-right: 15px;
`

export const AddPayment = styled(Link)`
  background: rgb(139, 37, 255);
  background: linear-gradient(
    90deg,
    rgba(139, 37, 255, 1) 0%,
    rgba(173, 102, 255, 1) 100%
  );
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 5px;
  color: white;
`

export const IconPlus = styled(BsFillPlusCircleFill)`
  color: white;
  font-size: 1.4rem;
  margin-left: 5px;

  &:hover {
    color: black;
    font-size: 1.5rem;
    transition: color 1s;
    transition: font-size 1s;
  }
`
