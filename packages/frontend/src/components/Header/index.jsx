import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, SvgIcon, Toolbar, Tooltip, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.svg'

const pages = [
  {
    label: 'Serviços Vendidos', 
    path: '/'
  }, 
  {
    label: 'Serviços Ativos',
    path: '/active'
  }, 
  {
    label: 'Histórico',
    path: '/history'
  }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const redirectAndCloseNavMenu = (page) => {
    navigate(page.path);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color='white'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginRight: 2,
              height: 40,
            }}
            onClick={() => navigate('/')}
            alt="Flow"
            src={Logo}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <FiMenu />
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
                <MenuItem key={page.label} onClick={() => redirectAndCloseNavMenu(page)}>
                  <Typography 
                    textAlign="center"
                    color="text"
                    sx={{ fontWeight: 600, textTransform: 'uppercase' }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            sx={{
              display: { xs: 'flex', md: 'none' },
              marginRight: 2,
              height: 40,
            }}
            onClick={() => navigate('/')}
            alt="Flow"
            src={Logo}
          />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                color={page.path === pathname ? 'primary' : 'text'}
                key={page.label}
                onClick={() => redirectAndCloseNavMenu(page)}
                sx={{ my: 2, fontWeight: page.path === pathname ? 600 : 500, display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
