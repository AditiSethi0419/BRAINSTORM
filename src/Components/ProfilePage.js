import React from "react";
import Footer from './Footer';
import Navbar from './Navbar';


const ProfilePage = () => {
  return (<div style={{backgroundColor: "#eee"}}>
    <Navbar />
    <div className="container">
      <div className="row ">
        <div className="col-8 p-2">
          <h1>Utkarsh Sharma</h1>
          <div >
            <a href="" className="m-2" >
              Home
            </a>
            <a href="" >
              About
            </a>
          </div>
          
          <div
            className="row"
            style={{
              backgroundColor: "lightgrey",
              border: "1px solid black",
              width: "auto",
              height: "auto",
            }}
          >
            <div className="col-5">
              <div className="row " >
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  className="rounded-circle"
                  style={{ width: "50px" }}
                  alt="Avatar"
                />
                <h6>Utkarsh Sharma</h6>
                <h4>Reading List</h4>
              </div>
              <div className="row">
                <h6>No stories</h6>
                
              </div>
            </div>
          
          </div>
        </div>

        <div className="col-4 "> 
        <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  className="rounded-circle m-2 p-2"
                  style={{ width: "120px" }}
                  alt="Avatar"
                />
                <h5>Utkarsh Sharma</h5>
                <a href="#"> Edit Profile</a>
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default ProfilePage;
