import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";
import Image7 from '../Images/Image7.png'

const SignIn = () => {
   return (<div style={{backgroundColor: "#eee"}}>
   <Navbar/>
    <div className="container" >
  
    <div className="row d-flex justify-content-center align-items-center my-4">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{borderRadius: "25px"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-2">Sign In</p>

                <form className="mx-1 mx-md-4" >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0 text-start">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0 text-start">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <button className="btn btn-info btn-lg btn-block" type="button">Sign In</button>
                  </div>
                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? 
                    <Link to='signUp'><a href="#!" className="link-info">Register here</a>
                    </Link>
                    </p>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={Image7}
                  className="img-fluid w-100" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  <Footer />
  </div>
  );
}

export default SignIn;
