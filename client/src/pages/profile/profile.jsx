import {
  PageContainer,
  ProfileImage,
  MenuContainer,
  MenuOptions,
  MenuOption,
} from "./styled"
import Routes from "./MenuRoutes/MenuRoutes"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function Profile() {
  const photo = useSelector(state => state.user?.photo)
  const auth = useSelector(state => state.auth)

  return (
    <PageContainer>
      {auth ? (
        <>
          <MenuContainer>
            <ProfileImage src={photo} alt="profile_image"></ProfileImage>
            <MenuOptions>
              <Link to="/profile">
                <MenuOption>My profile</MenuOption>
              </Link>
              <Link to="/profile/settings">
                <MenuOption>Settings</MenuOption>
              </Link>
              <Link to="/profile/account">
                <MenuOption>Acount</MenuOption>
              </Link>
              <Link to="/profile/payment-methods">
                <MenuOption>Payment Methods</MenuOption>
              </Link>
              <Link to="/profile/properties">
                <MenuOption>My properties</MenuOption>
              </Link>
              <Link to="/profile/history">
                <MenuOption>My history</MenuOption>
              </Link>
              <Link to="/profile/favorites">
                <MenuOption>My favorites</MenuOption>
              </Link>
            </MenuOptions>
          </MenuContainer>
          <Routes />
        </>
      ) : (
        <div>
          <p>Aún no tiene una cuenta</p>
          <Link to="/register">Create account</Link>
        </div>
      )}
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
