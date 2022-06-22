
import * as React from 'react';
import {AppBar, Typography, IconButton, Tooltip, Menu, Avatar} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import DiamondIcon from '@mui/icons-material/Diamond';
import CartWidget from './CartWidget';
import { pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
   
const pages = ['Sabanas', 'Toallas', 'Cocina', 'Toillet'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
   
const NavBar = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
  //  const [anchorElUser, setAnchorElUser] = React.useState(null);
   
   const handleOpenNavMenu = (event) => {
       setAnchorElNav(event.currentTarget);
   };
  //  const handleOpenUserMenu = (event) => {
  //      setAnchorElUser(event.currentTarget);
  //    };
   
     const handleCloseNavMenu = () => {
       setAnchorElNav(null);
     };
   
    //  const handleCloseUserMenu = () => {
    //    setAnchorElUser(null);
    //  };
   
     return (
       <AppBar style={{ background: '#2E3B55' }} position="static">
         <Container maxWidth="xl">
           <Toolbar disableGutters>
             <DiamondIcon sx={{ color: pink[300], fontSize: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
             <Typography
              className='typography'
               variant="h6"
               noWrap
               component="a"
               href="/"
               sx={{
                 mr: 18,
                 display: { xs: 'none', md: 'flex' },
                 fontFamily: 'monospace',
                 fontWeight: 700,
                 letterSpacing: '.1rem',
                 color: 'inherit',
                 textDecoration: 'none',
               }}
             >
               BLANQUERIA OESTE
             </Typography>
   
             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                 {pages.map((page) => (
                   <MenuItem key={page} onClick={handleCloseNavMenu}>
                     <Typography textAlign="center">
                       <Link className='navbar-brand' to= {`category/${page}`}>
                          {page}
                       </Link>
                     </Typography>
                   </MenuItem>
                 ))}
               </Menu>
             </Box>
             <DiamondIcon sx={{ color: pink[300], fontSize: 40, display: { xs: 'flex', md: 'none' }, mr: 1 }} />
             <Typography
               className='typography'
               variant="h5"
               noWrap
               component="a"
               href="/"
               sx={{
                 mr: 2,
                 display: { xs: 'flex', md: 'none' },
                 flexGrow: 1,
                 fontFamily: 'monospace',
                 fontWeight: 700,
                 letterSpacing: '.1rem',
                 color: 'inherit',
                 textDecoration: 'none',
               }}
             >
               BLANQUERIA OESTE
             </Typography>
             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
               {pages.map((page) => (
                 <Button
                   key={page}
                   onClick={handleCloseNavMenu}
                   sx={{ my: 2, color: 'white', display: 'block' }}
                 >
                    <Link className='navbar' to = {`category/${page}`}>
                      {page}
                    </Link>
                 </Button>
               ))}
             </Box>
   
             <Box sx={{ flexGrow: 0 }}>
               <CartWidget />
             </Box>
           </Toolbar>
         </Container>
       </AppBar>
     );
   };
   export default NavBar;
   
