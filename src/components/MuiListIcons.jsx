import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useSelector } from 'react-redux';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const internalLisnks=[
    {
        icon:<InboxIcon/>,
        title:"Dashboard",
        url:"/stock/"
    },
    {
        icon:<MailIcon/>,
        title:"Products",
        url:"/stock/products/"
    }
    ,
    {
        icon:<AccountBalanceIcon/>,
        title:"Firms",
        url:"/stock/firms/"
    }
    ,
    {
        icon:<ShoppingCartIcon/>,
        title:"Purchase",
        url:"/stock/purchases"
    }
    ,
    {
        icon:<ShoppingCartIcon/>,
        title:"Brands",
        url:"/stock/brands"
    }
]

const externalLinks=[
  {
    title:"Admin Panel",
    icon:<SupervisorAccountIcon/>,
    url:`${process.env.REACT_APP_BASE_URL}admin`
  }
]

const iconStyle={
  color:"white",
  "&:hover":{color:"red","&.MuiSvgIcon-root":{color:"red"}},
  "&.MuiSvgIcon-root":{color:"white"}
}

const MuiListIcons = () => {
    const navigate=useNavigate()
    const {isAdmin}=useSelector(state=>state.auth)
  return (
    <div>
    <List>
        {internalLisnks.map((item, index) => (
          <ListItem key={item.title} disablePadding>
         
            <ListItemButton onClick={() => navigate(item.url)} sx={iconStyle} >
              <ListItemIcon sx={{color:"white", "&:hover":{color:"red"}}}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        { isAdmin && externalLinks.map((item,index)=>(
            <ListItem key={item.title} disablePadding>
            <ListItemButton onClick={() => navigate(item.url)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default MuiListIcons