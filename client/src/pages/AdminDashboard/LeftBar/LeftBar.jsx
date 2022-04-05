import * as React from "react"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import GroupIcon from "@mui/icons-material/Group"
import MailIcon from "@mui/icons-material/Mail"
import ReceiptIcon from "@mui/icons-material/Receipt"
import VpnKeyIcon from "@mui/icons-material/VpnKey"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { actionLogout } from "../../../redux/actions"
import LogoutIcon from "@mui/icons-material/Logout"
import ListIcon from '@mui/icons-material/List';
import {CustomizedButton, CustomizedDiv} from "./styles"
import CategoryIcon from "@mui/icons-material/Category"
import AppsIcon from "@mui/icons-material/Apps"
import HomeIcon from "@mui/icons-material/Home"

export default function LeftBar() {
  const [state, setState] = React.useState({
    left: false,
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const list = anchor => (
    <Box
      sx={{ width: 230 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListItem
          button
          onClick={() => {
            navigate("/dashboard")
          }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {[
          "Users",
          "Rentals",
          "Emails",
          "Security",
          "Categories",
          "Services",
        ].map(text => (
          <ListItem
            button
            onClick={() => navigate(`/dashboard/${text}`)}
            key={text}>
            <ListItemIcon>
              {text === "Users" ? (
                <GroupIcon />
              ) : text === "Emails" ? (
                <MailIcon />
              ) : text === "Rentals" ? (
                <ReceiptIcon />
              ) : text === "Categories" ? (
                <CategoryIcon />
              ) : text === "Services" ? (
                <AppsIcon />
              ) : (
                <VpnKeyIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <br />
        <hr />
        <br />
        <ListItem
          button
          onClick={() => {
            dispatch(actionLogout())
            navigate("/")
          }}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" />
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div>
      {["left"].map(anchor => (
        <CustomizedDiv key={anchor}>
          <CustomizedButton 
          onClick={toggleDrawer(anchor, true)}><ListIcon/></CustomizedButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </CustomizedDiv>
      ))}
    </div>
  )
}
