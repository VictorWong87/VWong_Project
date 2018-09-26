import React from 'react';
import './login.css';
import '../../index.css';



export const LoginLayout = (props) => {
 
    return (
      <React.Fragment>
      
          <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("https://wallpapersultra.net/wp-content/uploads/4K-Desktop-Background-Wallpapers.jpg")'}}>
              <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                <form className="login100-form validate-form flex-sb flex-w">
                <div className="w-full text-center">
                    <span className="travelAgent text-center">
                      <h1>`Travel-Mate`</h1>
                    </span><br/>
                  </div>
                  <span className="login100-form-title p-b-53">
                    Sign In With
                  </span>
                  <a href="#fb" className="btn-face m-b-20">
                    <i className="fa fa-facebook-official" />
                    <img src="https://image.ibb.co/cgoMtU/Screen_Shot_2018_08_29_at_10_56_12_AM.png" alt="FACEBOOK" style={{paddingRight: '20px'}}/>
                    Facebook
                  </a>
                  <a href="#google" className="btn-google m-b-20">
                     <img src="https://image.ibb.co/b0vWSp/icon_google.png" alt="GOOGLE"/>
                    Google
                  </a>
                  <div className="p-t-31 p-b-9">
                    <span className="txt1">
                      Email
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Email is required">
                    <input onChange={props.onChangeInput(props.onChange)} className="input100" type="text" name="email" />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Password
                    </span>
                    <a href="#forgot" className="txt2 bo1 m-l-5">
                      Forgot?
                    </a>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input onChange={props.onChangeInput(props.onChange)} className="input100" type="password" name="pass" />
                    <span className="focus-input100" />
                  </div>
                  <div className="container-login100-form-btn m-t-17">
                    <button onClick={props.onClickLogin} className="login100-form-btn">
                      Sign In
                    </button>
                  </div>
                  <div className="w-full text-center p-t-55">
                    <span className="txt2">
                      Not a member?
                    </span>
                    <a href="#signup" className="txt2 bo1">
                      Sign up now
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="dropDownSelect1" />
          
      </React.Fragment>
    );
  }


