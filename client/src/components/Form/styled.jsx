import styled from "styled-components"


export const PropertyTitle = styled.h1`
  font-size: 36px;
  color: #1f0037;
  margin-bottom: 2.5%;
  margin-top: 2.5%;
  justify-self: center;
  background-color: #24292f;
  color:pink;
  padding: 0.3rem;
  border-radius: 0.5rem;
`
export const PropertyForm= styled.form`
  width: 100%;
  border-radius: 25px;
  background: #5d00a4;
  box-shadow: inset 21px 21px 42px #430076, inset -21px -21px 42px #7700d2;
  border-radius: 10px;
  padding-top: 10%;
  padding-bottom: 10%;
  display: flex;
  flex-direction: column;
  gap:0.3rem;
`
export const Container= styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`
export const PropertyField = styled.div`
  width: 90%;
  margin-left: 5%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;

  height: 5rem;
  padding: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  background: linear-gradient(145deg, #bf8ce6, #e3a6ff);
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
`
export const PropertyInput = styled.input`
  grid-column: 2/3;
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 5px;
  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 20px;
`
export const PropertyLabel = styled.label`
  grid-column: 1/2;
  grid-row: 1/2;
  text-align: left;
  padding-left: 5%;
  font-size: large;
  font-weight: bold;
  font-family: sans-serif;
`
export const PropertyError = styled.label`
 font-family: cursive;
 font-size: small;
 color: red;
 align-self: center;
`
export const PropertyButton= styled.button`
  color:#ffffff;
  justify-self: center;
  align-self: center;
  text-justify:center;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: rgba(27,31,36,0.1);
  width: 30%;
  min-height: 30px;
  background-color: #2da44e;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;

  transition: 0.2s;

  &:hover{
    background-color: #2c974b;
    
  }
`


