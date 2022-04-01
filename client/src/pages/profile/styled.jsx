import { Link } from "react-router-dom"
import styled from "styled-components"

export const PageContainer = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  width: 300px;
  height: fit-content;
  margin-top: 4%;
  margin-bottom: 5%;
  margin-left: 5%;
  padding: 10px;
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
  border-radius: 15px;
  flex-direction: column;
  align-content: center;

  @media (max-width: 720px) {
    width: 80%;
    margin: 1rem;
  }
`
export const MenuOptions = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-top: 10%;
`
export const MenuOption = styled.h3`
  font-size: 1rem;
  width: 50%;
  color: black;
  padding: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  border-bottom: 2px solid #d0a6ff;
  &:hover {
    background-color: #d0a6ff;
    border-bottom: 2px solid #be86ff;
    transition: 500ms;
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
  background-image: url(${props =>
    props.photo
      ? props.photo
      : "https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg"});
  margin-top: 1rem;
  margin-bottom: 1rem;

  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  margin-left: 40px;
  margin-right: 40px;

  position: relative;
  /* left: 20px; */
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
  background: rgb(226, 200, 255);
  background: linear-gradient(
    330deg,
    rgba(226, 200, 255, 1) 17%,
    rgba(233, 213, 255, 1) 39%,
    rgba(239, 226, 255, 1) 66%,
    rgba(244, 235, 255, 1) 100%
  );
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
