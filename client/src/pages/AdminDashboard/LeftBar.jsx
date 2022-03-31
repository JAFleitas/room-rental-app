import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import MailIcon from '@mui/icons-material/Mail';
import ReceiptIcon from '@mui/icons-material/Receipt';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function LeftBar() {
    const [state, setState] = React.useState({
        left: false,
    });
    
    const navigate= useNavigate()
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Users', 'Rentals','Emails' ,'Security'].map((text) => (
          <ListItem button 
          onClick={()=> navigate(`/dashboard/${text}`)} 
          key={text}>
            <ListItemIcon>
              {text==='Users'? <GroupIcon/> : text==='Emails'? <MailIcon/> : text==='Rentals'? <ReceiptIcon/> : <VpnKeyIcon/>  }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem >
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
