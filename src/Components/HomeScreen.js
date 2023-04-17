import React from 'react';
import ImageSlide from './ImageSlide';
import Image1 from "../Images/Image1.jpg";
import Image2 from '../Images/Image2.png';
import Image3 from '../Images/Image3.jpg';
import Image4 from '../Images/Image4.png';
import Image5 from '../Images/Image5.jpg';
import Footer from './Footer';
import PageGrid from './PageGrid';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';





function HomeScreen(){
  const slides =[
    {title:'Image1',img:Image1,description:'I am image1'},
    {title:'Image2',img:Image2,description:'I am image2'},
    {title:'Image3',img:Image3,description:'I am image3'},
    {title:'Image4',img:Image4,description:'I am image4'},
    {title:'Image5',img:Image5,description:'I am image5'},
  ];
    const containerStyles = {
      width: "auto",
      height: "280px",
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