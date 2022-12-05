import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"

export const ContainerPageDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  padding-top: 50px;
  

`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  padding-top: 20px;
  padding-bottom: 60px;
  border-bottom: 0.5px solid #aaaaaaaa;
  
  & h2 {
    font-size: 20px;
    font-weight: 700;

    padding-bottom: 10px;
  }
  & h1 {
    text-align: center;
    font-size: 30px;
    font-weight: 900;
    color: #6f5fcacc;
    padding-bottom: 10px;
    color:transparent;
    background: #ccc;
    background: linear-gradient(90deg, #43048a, #b574ff, #43048a);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  & p {
    font-size: 16px;
    padding-bottom: 60px;
    word-spacing: .1cm;
    color:#aaa !important;
    font-weight: 700;
    padding-top: 20px;
  }
  @media screen and (max-width: 740px) {
    align-items: center;
  }
`
export const StarRating = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 20px 0px;
  & h5 {
    color: #5f5f5f;
    padding: 5px;
    font-weight: 900;
    & a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
export const AiFillStarSt = styled(AiFillStar)`
  color: #6f5fca;
  margin-bottom: ${({mb})=> mb || "0px"};
  
`
export const BotonBack = styled.div`
  width: 100%;
  padding: 5px;
  align-self: center;

  background: ${({ disabled }) => (disabled ? "#aaa"  :  "linear-gradient(35deg,#5b04be 75% ,#1a0038b1)")};
  max-width: 100px;
  font-size: 14px;
  font-weight: 500;
  padding: 6px 20px;
  font-family: cursive;
  border-radius: 15px;
  
  text-align: center;
  
  cursor: pointer;

  &:hover {
    border-radius: 16.5px;
    background: ${({ disabled }) =>
      disabled ? "#aaa": "linear-gradient(35deg,#6504d4 75% ,#380275b0)"};
  }

`

export const ServicesSt = styled.div`
  display: flex;
  width: 200px;
  color:  #a455ff;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  
  
  
 
  & svg {
    font-size: 22px;
    text-align: center;
    position: relative;
    left: 5px;
  }
  & div {
    padding: 20px;
  }

  @media screen and (max-width: 470px) {
    width: 100%;
  }
`
export const DivReview = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  align-items: center;
  & h2 {
    padding-left: 5px;
    padding-top: 2px;
  }
`
export const Services = styled.div`
  display: flex;
  gap:10px;
  align-items: center;
  flex-direction: column;
  
  width:100%;
  padding:40px 0px;
  & h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 900;
    padding-bottom: 10px;
    
  color:transparent;
   background: #ccc;
   background: linear-gradient(90deg, #43048a, #b574ff, #43048a);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  }
`
export const PeopleAndRooms = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  h4 {
    color: #0a0a0a88;
    font-weight: 900;
  }
  @media screen and (min-width: 750px) {
    flex-direction: column;
    color: #0a0a0a;
    font-weight: 900;
    gap:30px
  }
`
