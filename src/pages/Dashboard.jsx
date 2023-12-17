// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import useAuthCall from "../hooks/useAuthCall";

// import Toolbar from "@mui/material/Toolbar";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

// import { useSelector } from "react-redux";
// import { Outlet } from 'react-router-dom';

// function Dashboard() {
//   const { currentUser } = useSelector(state => state.auth);
//   const { logout } = useAuthCall();
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             STOCK APP
//           </Typography>
//           {currentUser && <Button color="inherit" onClick={logout}>Logout</Button>}
//         </Toolbar>
//       </AppBar>
//     <Box sx={{mt:10}}>
//       <Outlet/>
//     </Box>
//     </Box>
//   );
// }

// export default Dashboard;
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import useAuthCall from "../hooks/useAuthCall";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import MuiListIcons from './../components/MuiListIcons';
import { useTheme } from '@mui/material';

const drawerWidth = 240;

function Dashboard(props) {
  const theme=useTheme()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { currentUser } = useSelector(state => state.auth);
    const { logout } = useAuthCall();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* Bukısmın yerine komponenti çağırıyoruz */}
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    
      <MuiListIcons/>

      <Divider />
      
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',backgroundColor:"black" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           STOCK APP
         </Typography>
          {currentUser && <Button color="inherit" onClick={logout}>Logout</Button>}
        </Toolbar>
      
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:theme.palette.secondary.main},
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,backgroundColor:theme.palette.secondary.main},
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Outlet/>
    </Box>
  );
}




export default Dashboard;