import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative">
        <Toolbar>
            
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ticket Connect
          </Typography>
          
          <Button color="inherit">Settings</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}