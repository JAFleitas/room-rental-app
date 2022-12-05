import styled from "styled-components"

export const ContainerImages = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  width: 100%;
  max-height: 400px;
  border-radius: 16px;
  padding: 40px 0px;
 
  @media screen and (max-width: 740px) {
    width: 100%;
    
    display: flex;
    
    
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
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 20px;
  grid-auto-flow: dense;
`
export const ImageModal = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 600px) {
    grid-column: ${({ format }) => (format === "wide" ? "span 2" : null)};
    grid-row: ${({ format }) => (format === "tall" ? "span 2" : null)};
  } ;
`
