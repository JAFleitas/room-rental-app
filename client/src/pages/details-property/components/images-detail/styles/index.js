import styled from "styled-components"

export const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  box-shadow: 10px 10px 3px #6f5fca55;

  background-color: #fff;
  width: 80vw;
  height: 30vw;

  border-radius: 16px;
  padding: 10px;
  @media screen and (max-width: 740px) {
    width: 100%;
    border-radius: 0;
    display: flex;
    height: 50vw;
    box-shadow: none;
    background-color: transparent;
  }
`

export const PrincipalImage = styled.div`
  display: flex;
  margin-right: 5px;
  padding: 5px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 740px) {
    width: 100%;
    height: 100%;
  }
`
export const SecondaryImages = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  & img {
    padding: 5px;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 740px) {
    display: none;
  }
`

export const Img = styled.img`
  border-radius: 15px;

  filter: brightness(1.2);
  :hover {
    filter: ${({ filter }) => (filter ? "brightness(0.5)" : null)};
  }
`

export const ContainerModalImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;
  grid-gap: 10px;
`
export const ImageModal = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
