import { Link } from "react-router-dom"
import styled from "styled-components"

export const PageContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  margin-top: 30px;
  @media (max-width: 720px) {
    gap: 20px;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  width: 25%;
  padding: 10px;
  border: 1px solid #a455ff;
  border-radius: 15px;
  flex-direction: column;
  align-content: center;
  min-height: 682px;

  @media (max-width: 720px) {
    width: 170px;
  }
`
export const MenuOptions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const MenuOption = styled.h3`
  font-size: 1rem;
  width: 100%;
  padding: 8px;
  text-align: center;
  background: ${props =>
    props.clicked
      ? "linear-gradient(45deg,#5b04be 60% ,#1a0038b1)"
      : "transparent"};
  transition: all 0.6s;
  &:hover {
    background: #a455ff;
    background: linear-gradient(45deg, #5b04be 60%, #1a0038b1);
  }
`

export const RentHistory = styled.div`
  width: 80%;
  margin-left: 10%;
  height: 80%;
  margin-top: 3%;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 20px;
  padding: 5%;

  @media (max-width: 720px) {
    width: 90%;
    margin-left: 5%;
    font-size: 1rem;
  }
`

export const Settings = styled.button`
  width: 80%;
  height: 10%;
  margin-left: 10%;
  margin-top: 5%;
  border-radius: 10px;
  background-color: #d722fc;
  color: white;

  @media (max-width: 720px) {
    height: 20%;
  }
`

export const UserProperties = styled.div`
  display: flex;
  width: 80%;
  margin-left: 10%;
  height: 80%;
  margin-top: 3%;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 20px;
  padding: 5%;

  @media (max-width: 720px) {
    width: 90%;
    margin-left: 5%;
    font-size: 1rem;
  }
`

export const ContentPhoto = styled.div`
  background-image: ${props =>
    props.photo
      ? `url(${props.photo})`
      : "url('https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg')"};

  width: 15vw;
  height: 15vw;
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin: 3vw;
  min-height: 108px;
  min-width: 108px;

  position: relative;
  /* left: 20px; */
  @media screen and (min-width: 1280px) {
    margin: 38px;
  }
`

export const ChangeImage = styled.div`
  background-image: url(https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Image-Free-PNG.png);
  padding: 5px;
  width: 40px;
  height: 40px;
  margin: 3px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  :hover {
    opacity: 0.7;
  }
`
export const InputInvisible = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
`

export const NotLogIn = styled.div`
  width: 50%;
  height: 257.5px;
  margin: 20px;
  margin-left: 25%;

  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 900px) {
    width: 80%;
    /* margin-bottom: 10%; */
    margin-left: 10%;
    margin-right: 10%;
  }
`

export const Message = styled.p`
  text-align: center;
  font-size: 34px;
`
export const LinkLogIn = styled(Link)`
  width: 40%;
  align-self: center;
  text-align: center;
  font-size: 24px;
  background-color: #d722fc;
  border-radius: 15px;
  padding: 8px;
  margin: 10px;
  &:hover {
    border-radius: 16.5px;
    background: linear-gradient(145deg, #c21fe3, #e624ff);
  }
  &:focus {
    border-radius: 18px;
    background: #d722fc;
    box-shadow: inset 5px 5px 10px #b71dd6, inset -5px -5px 10px #f727ff;
  }
`
