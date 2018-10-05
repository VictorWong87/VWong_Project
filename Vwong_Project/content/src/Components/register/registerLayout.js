import React from "react";
import "./register.css";
import TextInput from "../Common/TextInput"

const RegisterLayout = (props) => (

    
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
                    <TextInput  
                    className="input100" 
                    type="text"
                    id="firstName" 
                    val={props.state.firstName}
                    handleChange={props.handleChange}
                    />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Middle Name
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Middle Name is required">
                    <TextInput  
                    className="input100" 
                    type="text" 
                    id="middleName"
                    val={props.state.middleName}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Last Name
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                    <TextInput  
                    className="input100" 
                    type="text"
                    id="lastName"
                    name="lastName"
                    val={props.state.lastName}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Birthday
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Birthday is required">
                    <TextInput 
                    className="input100" 
                    type="date" 
                    name="birthday"
                    id="birthday"
                    val={props.state.birthday}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-31 p-b-9">
                    <span className="txt1">
                      Email
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Email is required">
                    <TextInput  
                    className="input100" 
                    type="email" 
                    id="email"
                    name="email"
                    val={props.state.email}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Password
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <TextInput  
                    className="input100" 
                    type="password" 
                    id="password"
                    name="pass"
                    val={props.state.password}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Confirm Password
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Password has to match">
                    <TextInput  
                    className="input100" 
                    type="password" 
                    id="passwordConfirm"
                    name="confirm-pass"
                    val={props.state.passwordConfirm}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Gender
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Enter a Gender">
                    <TextInput 
                    className="input100" 
                    type="text" 
                    id="gender"
                    name="gender"
                    val={props.state.gender}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Phone Number
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Phone Number has to have 10 digits">
                    <TextInput  
                    className="input100" 
                    type="text" 
                    id="phoneNumber"
                    name="phoneNumber"
                    val={props.state.phoneNumber}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="p-t-13 p-b-9">
                    <span className="txt1">
                      Zip Code
                    </span>
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Zip Code needs at least 5 digits">
                    <TextInput 
                    className="input100" 
                    type="text" 
                    id="zipCode"
                    name="zipCode"
                    val={props.state.zipCode}
                    handleChange={props.handleChange}
                     />
                    <span className="focus-input100" />
                  </div>
                  <div className="container-login100-form-btn m-t-17">
                    <button 
                      onClick={props.handleClick} 
                      className="login100-form-btn"
                    >Register
                    </button>
                  </div>
                  <div className="w-full text-center p-t-55">
                    <span className="txt2">
                      Have an Account already? 
                    </span>
                    <a href="/" className="txt2 bo1">
                      Log In
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div id="dropDownSelect1" />
        </React.Fragment>
    );

export default RegisterLayout