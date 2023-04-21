import React from 'react';

const ProfilePage = () => {
  return (
    <div className='container'>
      <div className='row d-flex flex-row justify-content-start ' >
        <div className='col-lg-8 mx-2 my-4 p-2 align-items-start' >
          <h1 >Utkarsh Sharma</h1>
          <div className='row mt-2' >
            <a href='' className='col'>Home</a>
            <a href='' className='col'>About</a>
          </div>
            <hr className='w-100 h-5'></hr>
        <div className='row' style={{backgroundColor:'lightgrey',border:'1px solid black',width:'auto', height:'auto'}}>
            <div className='col-5'>
            <div className='row'>
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" class="rounded-circle" style={{width: '30px'}} alt="Avatar" />
            <h6>Utkarsh Sharma</h6>
            <h3>Reading List</h3>
            </div>
            <div className='row'>
              <h6>No stories</h6>
              <img src="https://logowik.com/content/uploads/images/803_lock.jpg"  style={{width: '10px'}} alt="lock icon" />
            
            </div>
            
            </div>
            <div className='col-4'>hello </div>
            <div className='col-2'>hello</div>
            <div className='col-1'>hello </div>
        </div>
        </div>
      
        <div className='col-lg-4'>
          Hello
        </div>

      </div>
      
    </div>
  );
}

export default ProfilePage;
