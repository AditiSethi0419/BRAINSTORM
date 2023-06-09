import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image3 from '../Images/Image3.jpg';
export default function ImgMediaCard() {
  return (

    <Card sx={{ maxWidth: 345,maxHeight:'23rem' , mx:2, mt:2,my:2}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Image3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   
   
  );
}