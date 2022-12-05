import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 20px;
  width: 80px;
  min-width: 80px;
  min-height: 40px;
  
  z-index: 150;
 

  border:none;


  svg {
     color: #e9e0e0ee;
  }
  transition: all 1s;
  &:hover {
   svg{
    color:#f0f0f0
   }
  }

  &:active {
    border-radius: 21px;
    
    box-shadow: inset 5px 5px 10px #d18de0, inset -5px -5px 10px #ffb3ff;
  }
`

export const Icon = styled.div`
  color: black;
  font-size: 3.5vh;
  min-height: 20px;
  font-weight: 800;
  margin-left: 0.3vw;
`

export const ImageContainer = styled.div`
  height: 40px;
  width: 40px;
  margin-left: 2px;
  color: black;
  background-color: white;
  border-radius: 50px;
`
export const ProfileImage = styled.img`
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;

  width: 100%;
  height: 100%;
`
