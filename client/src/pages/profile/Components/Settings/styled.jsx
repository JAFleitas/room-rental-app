import styled from "styled-components"


export const ChangePassword = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap:30px;
  align-items: center;

`

export const Input = styled.input`
  width: 40%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  background: linear-gradient(180deg,#101010 30%,#000000);
  color: white;
  font-size: 20px;
  border: 1px solid #a455ff;
  box-shadow: inset 0 1px 0 rgba(208, 215, 222, 0.2);
  &:focus {
    border-color: #0969da;
    outline: none;
    background-color: white;
    color:#a455ff ;
    box-shadow: 0 0 0 3px rgba(9, 105, 218, 0.3);
  }
  @media (max-width: 720px){
    width: 100%;
    margin-top:0 ;
  margin-bottom:0 ;
  margin-left: 0;

  }
`
export const Button = styled.button`
  
  
  justify-self: center;
  
  text-justify: center;
 
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 80%;
  padding: 8px;
  background-color: #2da44e;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  margin-top:20px;
  transition: 0.2s;

  &:hover {
    background-color: #2c974b;
  }
  
  @media (max-width: 720px){
    width: 100%;
  }
`

export const PasswordError = styled.label`
  font-family: cursive;
  font-size: small;
  color: #6d6875;
  align-self: start;
  margin-left: 15px;
`
