import Footer from "./Footer";
import Navbar from "./Navbar";

function SignUp() {
  return (
    
    <div  style={{backgroundColor: "#eee"}} >
      <Navbar/>
    <div className="container" style={{backgroundColor: "#eee"}}>
      <div className="row  my-4">
        <div className="col-lg-12 col-xl-11">
          <div className="card text-black" style={{borderRadius: "25px"}}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-2">Sign up</p>
  
                  <form className="mx-1 mx-md-4">
  
                    <div className="d-flex flex-row align-items-center mb-2">
                     
                      <div className=" row form-outline flex-fill mb-0">
                        <div className="col-6 text-start">
                      <label className="form-label" htmlFor="your_name">First Name</label>
                        <input type="text" id="your_name" className="form-control" />
                        </div>
                        <div className="col-6 text-start">
                        <label className="form-label" htmlFor="your_name">Last Name</label>
                        <input type="text" id="your_name" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex flex-row align-items-center mb-2">
                    <div className="col-6 text-start">
                      <label className="form-label" htmlFor="age">Age</label>
                        <input type="number" pattern="[0-9]{5}" id="age" className="form-control" />
                      </div>
                      <div className="col-6 text-start">
                        
                      <label className="form-label" htmlFor="age">Gender</label>
                      <select className="select form-control">
                    <option value="1" disabled>Gender</option>
                    <option value="2">Female</option>
                    <option value="3">Male</option>
                    <option value="4">Other</option>
                  </select>
                    </div>

                      </div>
  
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
  
                    <div className="d-flex flex-row align-items-center mb-4">
                      
                      <div className="form-outline flex-fill mb-0 text-start">
                      <label className="form-label" htmlFor="cpassword">Confirm your password</label>
                        <input type="password" id="cpassword" className="form-control" />
                       
                      </div>
                    </div>
  
                   
  
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" className="btn btn-primary btn-lg">Sign Up</button>
                    </div>
  
                  </form>
  
                </div>
                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    className="img-fluid" alt="Sample image"/>
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
   
  );
}

export default SignUp;