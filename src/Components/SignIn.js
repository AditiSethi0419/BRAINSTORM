import React from 'react';

const SignIn = () => {
  return (
    <section className="vh-90">
  <div className="container-fluid h-90">
    <div className="row">
      <div className="col-sm-8 text-black">

        

        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form >

            <h2 className="fw-normal mb-3 pb-3" >Log in</h2>

            <div className="form-outline mb-4">
              <input type="email" id="email" className="form-control form-control-lg" />
              <label className="form-label" >Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="password" className="form-control form-control-lg" />
              <label className="form-label" >Password</label>
            </div>

            <div className="pt-1 mb-4">
              <button className="btn btn-info btn-lg btn-block" type="button">Login</button>
            </div>

            <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

          </form>

        </div>

      </div>
      <div className="col-sm-4 px-0 d-none d-sm-block">
        <img src="https://in.pinterest.com/pin/686447168223709687/"
          alt="Login image" className="w-100 vh-100"  />
      </div>
    </div>
  </div>
</section>
  );
}

export default SignIn;
