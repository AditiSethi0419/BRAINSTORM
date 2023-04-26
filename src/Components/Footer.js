import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
  <Box position="static" sx={{ bgcolor: "white",color:'black',textAlign:'center', p:2,border:'1px solid white'}}>
    <Typography>
     BRAINSTORM
    </Typography>
  </Box>
  );
}

export default Footer;

