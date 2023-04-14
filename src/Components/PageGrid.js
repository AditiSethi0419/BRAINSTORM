import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import {Grid} from '@mui/material';
import Categories from './Categories';

const PageGrid = () => {
  return (
    
  <Grid container display={'flex'} flexWrap={'nowrap'}> 
  <Grid item xs={8} sx={{m:3,p:3}} display={'flex'} >
    
    <ImgMediaCard />
    <ImgMediaCard />
   
 
  </Grid> 
  <Grid item xs={4} sx={{m:3,p:3}}>
 <Categories />
  </Grid>
 </Grid>

  );
}

export default PageGrid;
