import styled from "styled-components"

export const SubMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 65%;
  margin-left: 5%;
  margin-top: 4%;
  margin-bottom: 4%;
  padding: 10px;
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
  height: fit-content;
  @media (max-width: 720px) {
    margin: 1rem;
    width: 90%;
  }
`
export const Title = styled.h1`
  width: 70%;
  align-self: center;
  justify-self: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  font-size: 2.5rem;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 15px;
  border: 2px #d0a6ff solid;
  text-align: center;
  margin: 0 auto;
`

export const CardContainer = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 15px;
  /* border: 2px #d0a6ff solid; */
  margin-top: 2%;
`

export const RedButton = styled.button`
  color: #ffffff;
  justify-self: center;
  align-self: center;
  text-justify: center;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 30%;
  min-height: 30px;
  background-color: #cf222e;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  margin: 1rem 0;

  transition: 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #cf222e;
  }
`
export const WhiteButton = styled.button`
  display: flex;
  color: black;
  justify-self: center;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 3px;
  border: 1px solid black;
  border-radius: 0.5rem;
  box-shadow: rgba(27, 31, 36, 0.1);
  width: 30%;
  min-height: 30px;
  background-color: white;
  font-size: large;
  font-weight: normal;
  font-family: sans-serif;
  margin: 1rem auto;

  transition: 0.2s;

  &:hover {
    background-color: #e9ecef;
  }
`

export const Card = styled.div`
  width: 90%;
  border-radius: 15px;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #d722fc;
`
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  &button {
    width: 100%;
  }
`
export const EditButton = styled(RedButton)`
  background: #00bb2d;
  &:hover {
    background: #00bb2daa;
    color: #fff;
  }
`
