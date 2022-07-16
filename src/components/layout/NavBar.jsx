import { React, useState } from 'react'
import { AppBar, Box, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import  DiamondIcon from '@mui/icons-material/Diamond';
import { pink } from '@mui/material/colors';
import CartWidget from '../cart/CartWidget';
import { Link, NavLink } from 'react-router-dom';


export default function NavBar() {

  const pages = ['sabanas', 'toallas', 'cocina', 'cortinas'];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  

  return (
    <AppBar style={{ background: '#bdbdbd' }} position='static'>
      <Container maxWidth='xl'>
        <Toolbar>
          
          {/* Desktop  */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to='/' style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'white',
            }}>
              <DiamondIcon sx={{ color: pink[300], fontSize: 40, p: 0, marginRight: 1, display: { xs: 'none', md: 'flex' } }}/>
              <Typography
                className='typography'
                variant="h6"
                noWrap
                href="/"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  textDecoration: 'none',
                  color: 'white'
                }}
              >
                Blanqueria Oeste
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            {
              pages.map( (page) => (
                <NavLink
                  to={ `category/${page}` }
                  key={ page }
                  className='nav-link'
                >
                  { page }
                </NavLink>
              )) 
            }
          </Box>

          <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            <Link className='link' to='/cart'>
              <CartWidget />
            </Link>
          </Box>
          {/* END DESKTOP */}

          {/* MOBILE */}
          <Box sx={{ width: '100%', display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={ () => setIsDrawerOpen(!isDrawerOpen) }
            >
              <Menu />
            </IconButton>

            <Drawer
              open={ isDrawerOpen }
              onClose={ () => setIsDrawerOpen(false) }
            >
              <List>
                {
                  pages.map((page) => (
                    <Link
                      to={`category/${page}`}
                      key={page}
                      className='navbar'
                      onClick={ () => setIsDrawerOpen(false) }
                    >
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <ListItemText sx={{ textAlign: 'center' }} primary={ page } />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))
                }
              </List>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              </Box>
            </Drawer>
            
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Link to='/' style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'white',
              }}>
                <DiamondIcon sx={{ color: pink[300], fontSize: 40, p: 0, marginRight: 1}}/>

                <Typography
                  className='typography'
                  variant="h5"
                  noWrap
                  href="/"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Blanqueria Oeste
                </Typography>         
              </Link>
            </Box>

            <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: 'flex' }}>
              <Link className='link' to='/cart' style={{ display: 'flex' }}>
                <CartWidget />
              </Link>
            </Box>

          </Box>

          {/* END MOBILE */}

        </Toolbar>
      </Container>
    </AppBar>
  )
}
   
