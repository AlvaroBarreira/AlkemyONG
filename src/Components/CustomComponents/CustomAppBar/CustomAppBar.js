import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CustomAppBar = ({ user }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#9AC9FB' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton
            // eslint-disable-next-line
            aria-label="menu"
            color="inherit"
            edge="start"
            size="large"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Avatar alt={user.name} src={user.image} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomAppBar;
