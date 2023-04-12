import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import {Grid} from '@mui/material';

const PageGrid = () => {
  return (
    
    <Grid container spacing={2} flexDirection={'row'}>
  <Grid item xs={8}>
    <ImgMediaCard />
    <ImgMediaCard />
  </Grid>
  <Grid item xs={4}>
    {/* <Item>xs=4</Item> */}
  </Grid>
</Grid>

  );
}

export default PageGrid;
