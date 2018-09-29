import React from 'react';
import './login.css';
import '../../index.css';



export const LoginLayout = (props) => {
 
    return (
      <React.Fragment>
      
          <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("http://yesofcorsa.com/wp-content/uploads/2015/08/4453_pokemon.jpg")'}}>
              <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                <form className="login100-form validate-form flex-sb flex-w">
                <div className="w-full text-center">
                    <span className="travelAgent text-center">
                    <img src="https://www.postard.com/wp-content/uploads/2016/09/Pok%C3%A9mon_logo_English.png" className="PokemonLogo" alt="Pokemon" />
                      <h1 className="pokemon-elites">Elites</h1>
                    </span><br/>
                  </div>
                  <span className="login100-form-title p-b-53">
                    Sign In With
                  </span>
                  <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=113869198637480&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.1%2Fdialog%2Foauth%3Fchannel%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252Fmp2v3DK3INU.js%253Fversion%253D42%2523cb%253Df12d7cad81065c%2526domain%253Ddevelopers.facebook.com%2526origin%253Dhttps%25253A%25252F%25252Fdevelopers.facebook.com%25252Ff18eba81a167328%2526relation%253Dopener%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fconnect%252Fxd_arbiter%252Fr%252Fmp2v3DK3INU.js%253Fversion%253D42%2523cb%253Df263d69696d8d18%2526domain%253Ddevelopers.facebook.com%2526origin%253Dhttps%25253A%25252F%25252Fdevelopers.facebook.com%25252Ff18eba81a167328%2526relation%253Dopener%2526frame%253Df3ef0367e9ce29%26display%3Dpopup%26scope%26response_type%3Dnone%252Ctoken%252Csigned_request%26domain%3Ddevelopers.facebook.com%26auth_type%26ref%3DLoginButton%26origin%3D1%26client_id%3D113869198637480%26ret%3Dlogin%26sdk%3Djoey%26fallback_redirect_uri%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Fdocs%252Ffacebook-login%252Fweb%252F%26logger_id%3D09a92e93-cd5e-5edc-9be9-781ac3657784&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2Fmp2v3DK3INU.js%3Fversion%3D42%23cb%3Df263d69696d8d18%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ff18eba81a167328%26relation%3Dopener%26frame%3Df3ef0367e9ce29%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26e2e%3D%257B%257D&display=popup&locale=en_US&logger_id=09a92e93-cd5e-5edc-9be9-781ac3657784" 
                     className="btn-face m-b-20"
                  >
                    <i className="fa fa-facebook-official" />
                    <img 
                    src="https://image.ibb.co/cgoMtU/Screen_Shot_2018_08_29_at_10_56_12_AM.png" 
                    alt="FACEBOOK" 
                    style={{paddingRight: '20px'}}
                  />
                    Facebook
                  </a>
                  <a href="https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=831371170934-udapit5jhjj56pft5l2drc9gjhfeclf3.apps.googleusercontent.com&as=Lj7TTQj3Dc15E7VhW3AXiw&destination=https%3A%2F%2Fgoogle-developers.appspot.com&approval_state=!ChRuOVhvYnR4S1RhOUhubllhU1FhVxIfazFRNTlQNEUwbk1VSU5vbEVpbVNxcUVWTGZMZ1lSWQ%E2%88%99ANKMe1QAAAAAW67myPI-fEXz9KVo3_DjS8YnJw8dipRw&oauthgdpr=1&xsrfsig=AHgIfE-jQ1H4Ly_rJgSCB3PLbW82nRFfgA&flowName=GeneralOAuthFlow" 
                     className="btn-google m-b-20">
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
                    <a href="/user/forgotPassword" className="txt2 bo1 m-l-5">
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
                    <a href="/user/Register" className="txt2 bo1">
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


