import {
  PageContainer,
  MenuContainer,
  MenuOptions,
  MenuOption,
  ContentPhoto,
  ChangeImage,
  InputInvisible,
} from "./styled"
import Routes from "./MenuRoutes/MenuRoutes"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import getHeaderToken from "../../utilities/getHeadertoken"
import { loadUser } from "../../redux/actions"
import axios from "axios"
import swal from "sweetalert"
const api = import.meta.env.VITE_APP_API_URL

export default function Profile() {
  const photo = useSelector(state => state.user?.photo)
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const changeImageProfile = async e => {
    if (localStorage.getItem("tokenRentalApp")) {
      const files = e.target.files
      if (!/\.(jpg|png|gif)$/i.test(files[0].name)) {
        swal({
          title: "Warinig",
          text: "The file to update is not an image!",
          icon: "warning",
        })
      } else {
        let data = new FormData()
        data.append("file", files[0])
        data.append("upload_preset", "rentalAppProfiles")
        try {
          let res = await fetch(
            "https://api.cloudinary.com/v1_1/dye9d3vzy/image/upload",
            {
              method: "POST",
              body: data,
            },
          )
          let file = await res.json()
          await axios
            .put(
              `${api}/users`,
              { data: { photo: file.secure_url } },
              getHeaderToken(),
            )
            .then(res => {
              dispatch(loadUser())
              swal(res.data, {
                icon: "success",
              })
            })
            .catch(error =>
              swal({
                title: "Error!",
                text: "An error has occurred",
                icon: "error",
              }),
            )
        } catch (error) {
          swal({
            title: "Error!",
            text: "An error has occurred",
            icon: "error",
          }),
            console.log(error)
        }
      }
    } else {
      swal({
        title: "Error!",
        text: "This user is not logged in",
        icon: "error",
      })
    }
  }

  return (
    <PageContainer>
      {auth ? (
        <>
          <MenuContainer>
            <ContentPhoto photo={photo}>
              <ChangeImage>
                <InputInvisible type="file" onChange={changeImageProfile} />
              </ChangeImage>
            </ContentPhoto>
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
              <Link to="/profile/myProperties">
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
