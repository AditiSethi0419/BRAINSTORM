import React from 'react';
import ImageSlide from './ImageSlide';
import CarouselImage1 from '../Images/CarouselImage1.jpg';
import CarouselImage2 from '../Images/CarouselImage2.jpg';
import CarouselImage3 from '../Images/CarouselImage3.png';
import CarouselImage4 from '../Images/CarouselImage4.png';
import CarouselImage5 from '../Images/CarouselImage5.jpg';
import CarouselImage6 from '../Images/CarouselImage6.jpg';
import CarouselImage7 from '../Images/CarouselImage7.png';
import Footer from './Footer';
import PageGrid from './PageGrid';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';





function HomeScreen(){
  const slides =[
    {title:'Image1',img:CarouselImage1,description:'I am image1'},
    {title:'Image2',img:CarouselImage2,description:'I am image2'},
    {title:'Image3',img:CarouselImage3,description:'I am image3'},
    {title:'Image4',img:CarouselImage4,description:'I am image4'},
    {title:'Image5',img:CarouselImage5,description:'I am image5'},
    {title:'Image4',img:CarouselImage6,description:'I am image4'},
    {title:'Image5',img:CarouselImage7,description:'I am image5'},
  ];
    const containerStyles = {
      width: "auto",
      height: "500px",
      margin: "0 auto",
    };
  return(
    <div>
      <Navbar />
    <div style={containerStyles}>
        <ImageSlide slides={slides} />
      </div>
    <br></br>
    <br></br>
  
      <PageGrid />
    
   <Footer />
   </div>
  )

}
export default HomeScreen;