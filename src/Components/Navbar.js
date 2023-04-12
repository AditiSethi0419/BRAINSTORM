import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import blog_logo from '../Images/blog_logo.jpg';
import ImageSlide from './ImageSlide';
import Image1 from "../Images/Image1.jpg";
import Image2 from '../Images/Image2.png';
import Image3 from '../Images/Image3.jpg';
import Image4 from '../Images/Image4.png';
import Image5 from '../Images/Image5.jpg';
import ImgMediaCard from './ImgMediaCard';
import Footer from './Footer';

const slides =[
  {title:'Image1',img:Image1,description:'I am image1'},
  {title:'Image2',img:Image2,description:'I am image2'},
  {title:'Image3',img:Image3,description:'I am image3'},
  {title:'Image4',img:Image4,description:'I am image4'},
  {title:'Image5',img:Image5,description:'I am image5'},
];
function Navbar() {
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (<>
   <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" sx={{ bgcolor: "white",color:'black',textAlign:'right' }} >
      <Container maxWidth="xl">
        <Toolbar >
        <img src={blog_logo} style={{width:'50px',height:'50px'}}  alt='logo_here'/>
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
            }}>
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
    <div style={containerStyles}>
        <ImageSlide slides={slides} />
      </div>
    <br></br>
    <br></br>
    <Box sx={{display:'flex',flexDirection:'row'}}>
      <ImgMediaCard />
      <ImgMediaCard />
      <ImgMediaCard />
      <ImgMediaCard />
      </Box>
   <Footer />
      
      
      
    </>
  );
}
export default Navbar;