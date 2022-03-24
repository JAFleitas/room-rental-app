import {
  PageContainer,
  ProfileImageContainer,
  ProfileImage,
  MenuContainer,
  MenuOptions,
  MenuOption,
} from "./styled"
import OptionalMenu from "./OptionalMenu/OptionalMenu"
import { Link } from "react-router-dom"
export default function Profile() {
  return (
    <PageContainer>
      <MenuContainer>
        <ProfileImageContainer>
          <ProfileImage src="" alt="profile_image"></ProfileImage>
        </ProfileImageContainer>
        <MenuOptions>
          <Link to="/profile">
            <MenuOption>Info</MenuOption>
          </Link>
          <Link to="/profile/settings">
            <MenuOption>Settings</MenuOption>
          </Link>
          <Link to="/profile/properties">
            <MenuOption>Properties</MenuOption>
          </Link>
          <Link to="/profile/history">
            <MenuOption>History</MenuOption>
          </Link>
          <Link to="/profile/favorites">
            <MenuOption>Favorites</MenuOption>
          </Link>
        </MenuOptions>
      </MenuContainer>
      <OptionalMenu />
    </PageContainer>
  )
}

{
  /* <FullName>{user.name ? user.name : "Name"}</FullName>
        <Info>{user.email ? user.email : "Email"}</Info>
        <Info>
          {user.country ? user.country + ", " : "Country, "}
          {user.city ? user.city : "city"}
        </Info>
        <Settings>Settings</Settings>
<RentHistory>Historial de Cards de propiedades que alquilo</RentHistory>
<UserProperties>Propiedades del Usuario</UserProperties> */
}
