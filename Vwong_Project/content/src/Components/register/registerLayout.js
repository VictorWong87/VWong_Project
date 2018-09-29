import React from "react";
import "./register.css";

export const RegisterLayout = (props) => {

    return (
        <React.Fragment>
            <div className="limiter">
            <div className="container-register100" style={{backgroundImage: 'url("https://hdqwalls.com/download/pokemon-2048x1152.jpg")'}}>
              <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                <form className="login100-form validate-form flex-sb flex-w">
                <div className="w-full text-center">
                    <span className="travelAgent text-center">
                    <img src="https://www.postard.com/wp-content/uploads/2016/09/Pok%C3%A9mon_logo_English.png" className="PokemonLogo" alt="Pokemon" />
                      <h1 className="pokemon-elites">Elites</h1>
                    </span><br/>
                  </div>
                  <div className="login100-form-title p-b-53">
                    Register an Account
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      First Name
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="First Name is required">
                    <input  className="input100" type="firstname" name="firstName" />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Last Name
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                    <input  className="input100" type="lastname" name="lastName" />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Birthday
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Birthday is required">
                    <input  className="input100" type="date" name="birthday" />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-31 p-b-9">
                    <span className="txt1">
                      Email
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Email is required">
                    <input  className="input100" type="text" name="email" />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Password
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input  className="input100" type="password" name="pass" />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Confirm Password
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password has to match">
                    <input  className="input100" type="password" name="confirm-pass" />
                    <span className="focus-input100" />
                  </div>
                  <div className="container-login100-form-btn m-t-17">
                    <button onClick={props.onClickLogin} className="login100-form-btn">
                      Register
                    </button>
                  </div>
                 
                </form>
              </div>
            </div>
          </div>
          <div id="dropDownSelect1" />
        </React.Fragment>
    );
}