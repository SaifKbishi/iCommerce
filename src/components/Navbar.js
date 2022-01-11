import React, { useState } from 'react';
import {AppBar,Box,Toolbar,IconButton ,Typography,Menu ,Container,Avatar ,Button ,Tooltip ,MenuItem,InputBase,Badge, Link,Stack} from '@mui/material/';
import { styled, alpha,createTheme,ThemeProvider  } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

// const pages = ['Products', 'About', 'Contact'];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    console.log('handleOpenNavMenu')
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (event) => {
    // event.preventDefault();
    // console.log('handleCloseNavMenu')
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };
  const handleOpenProfile = (event) => {
    // event.preventDefault();
    console.log('open profile');
  };
  const handleLogInLogout = ()=>{
    setIsLoggedIn(!isLoggedIn)
  }


  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  
  return (
    <ThemeProvider theme={icommerce}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/**MOBILE */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link href="/products" color="inherit" underline="hover" 
                onClick={handleCloseNavMenu}
                sx={{ my: 3, mx:1, color: 'black', display: 'block' }} textAlign="center"
                >Products</Link>                
              <Link href="/about" color="inherit" underline="hover" 
                onClick={handleCloseNavMenu}
                sx={{ my: 3, mx:1, color: 'black', display: 'block' }} textAlign="center"
                >About</Link>
              <Link href="/contact" color="inherit" underline="hover" 
                onClick={handleCloseNavMenu}
                sx={{ my: 3, mx:1, color: 'black', display: 'block' }} textAlign="center"
                >Contact</Link>
            </Menu>
          </Box>
          {/**END MOBILE for left menu*/}
          <Link href="/" color="inherit" underline="none"
            onClick={handleCloseNavMenu}
            sx={{ my: 3, mx:1, color: 'success', display: 'block' }} textAlign="center">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
              >iAmazon</Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
             <Link href="/products" color="inherit" underline="hover" 
              onClick={handleCloseNavMenu}
              sx={{ my: 3, mx:1, color: 'secondary', display: 'block' }}
              >PRODUCTS</Link>
             <Link href="/about" color="inherit" underline="hover" 
              onClick={handleCloseNavMenu}
              sx={{ my: 3, mx:1, color: 'secondary', display: 'block' }}
              >ABOUT</Link>
             <Link href="/contact" color="inherit" underline="hover" 
              onClick={handleCloseNavMenu}
              sx={{ my: 3, mx:1, color: 'secondary', display: 'block' }}
              >CONTACT</Link>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {isLoggedIn ?
          <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit" >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit" >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Your Avatar" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
              <MenuItem >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                  onClick={handleOpenProfile}
                >
                  <AccountCircle />
                </IconButton>
                <p>Profile</p>
              </MenuItem>
              <MenuItem sx={{ display: { xs: 'flex', md: 'none' } }} >
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                      <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
              </MenuItem>
              <MenuItem sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit" >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <p>Notifications</p>
              </MenuItem>
              <MenuItem>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <DashboardIcon />
                </IconButton>
                <p>Dashboard</p>
              </MenuItem>
              <MenuItem onClick={handleLogInLogout}>
                <IconButton
                  size="large"
                  aria-label="Logout"
                  aria-controls="primary-search-account-menu"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <LogoutIcon />
                </IconButton>
                <p>Logout</p>
              </MenuItem>
              </Menu>
            </Box>
            </>:
            <Stack direction="row" spacing={2} >
              <Button variant="contained" color='info' onClick={() => {handleLogInLogout();}} ><LoginIcon/> Login</Button>
              <Button variant="contained" color='info' onClick={() => {alert('Register clicked');}} ><PersonAddIcon/>Register</Button>
              <Button variant="contained" color='info' onClick={() => {alert('Cart clicked');}} ><ShoppingCartIcon/>Cart</Button>
            </Stack>
          }
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
/***
.palette.primary
.palette.secondary
.palette.error
.palette.warning
.palette.info
.palette.success */
/**
primary.main
secondary.main
error.main
warning.main
info.main
success.main
text.primary
text.secondary
text.disabled
 */

const icommerce = createTheme({
  palette: {
    primary: {
      // main: '#31708E',
      main: '#C2CAD0',
    },
    secondary: {
      // main: '#5085A5',
      main: '#C2B9B0',
      contrastText: '#ffcc00',
    },
    error:{
      main: '#b90e0a'
    },
    info:{
      // main: '#2E9CCA'
      main: '#c2b9b0'
    },
    success:{
      main: '#E7717D'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  text:{
    primary:{
      color: '#7e685a'
    },
    secondary:{
      color:'#afs275'
    },
    disabled:{},
  }
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
