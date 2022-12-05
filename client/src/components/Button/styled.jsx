import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 90px;
  min-width: 80px;
  min-height: 40px;
  border: 2px solid #370a69;
  z-index: 150;
  border-radius: 20px;
  padding: 3px 6px;
  svg {
    color: #e9e0e0ee;
  }
  transition: all 1s;
  &:hover {
    svg {
      color: #f0f0f0;
    }
  }
`

export const Icon = styled.div`
  font-size: 30px;
  min-height: 20px;
  font-weight: 800;
  margin-left: 8px;
`

export const ImageContainer = styled.div`
  height: 40px;
  width: 40px;

  border-radius: 50px;
`
export const ProfileImage = styled.img`
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;

  width: 100%;
  height: 100%;
`
