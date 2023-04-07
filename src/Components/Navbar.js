import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import blog_logo from '../Images/blog_logo.jpg';


function Navbar() {
  return (<>
   <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ bgcolor: "white",color:'black',textAlign:'right' }} >
      <Container maxWidth="xl">
        <Toolbar >
        <img src={blog_logo} style={{width:'50px',height:'50px'}}  />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 'bold',
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            BRAINSTORM
           
          </Typography>
          
          <Box  sx={{flexGrow: 1,color:'black'}}>
          <Button color="inherit">Write</Button>
          <Button color="inherit">Sign In</Button>
          </Box>
          </Toolbar>
      </Container>
    </AppBar>
    </Box>
   
    </>
  );
}
export default Navbar;