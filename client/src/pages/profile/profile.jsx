import {
  PageContainer,
  FullName,
  ProfileImageContainer,
  ProfileImage,
  InfoContainer,
  Info,
  RentHistory,
  Settings,
  UserProperties,
} from "./styled"
import { useSelector } from "react-redux"

export default function Profile() {
  const user = useSelector(state => state.user)
  console.log(user)
  return (
    <PageContainer>
      <FullName>{user.name ? user.name : "Name"}</FullName>
      <InfoContainer>
        <ProfileImageContainer>
          <ProfileImage src="" alt="profile_image"></ProfileImage>
        </ProfileImageContainer>
        <Info>{user.email ? user.email : "Email"}</Info>
        <Info>
          {user.country ? user.country + ", " : "Country, "}
          {user.city ? user.city : "city"}
        </Info>
        <Settings>Settings</Settings>
      </InfoContainer>
      <RentHistory>Historial de Cards de propiedades que alquilo</RentHistory>
      <UserProperties>Propiedades del Usuario</UserProperties>
    </PageContainer>
  )
}
