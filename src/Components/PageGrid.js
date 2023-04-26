import React from 'react';
import ImgMediaCard from './ImgMediaCard';
import Categories from './Categories';

const PageGrid = () => {
  return (
    
  <div className='container'>
    <div className='row'>
  <div className='col-8'>
  <div className='row'>
    
    <ImgMediaCard />
    <ImgMediaCard />
    <ImgMediaCard />
    <div>
    <button type="button" className="btn btn-primary my-2">Load more</button>
    </div>
    </div>      
  </div> 
  <div className='col-4'>
 <Categories />
  </div>
 </div>
 </div>
  );
}

export default PageGrid;
