import React, {Component} from "react";
import "../login/login.css"
// import axios from axios;
import NavBar from "../navbar/navbar"


class PokeTrainerLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    handleClick = evt => {
        evt.preventDefault();
    }
    handleChange = evt => {
        evt.preventDefault();
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        }, () => this.validateField(key, val))
    }

    render() {

        return (

            <React.Fragment>

                <NavBar/>
                
                <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("https://i2.wp.com/biseyre.com/wp-content/uploads/2018/08/206268.jpg")'}}>
              <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                <div className="login100-form validate-form flex-sb flex-w">
                <div className="w-full text-center">
                   
                  </div>

                  <div className="Pokefile100-form-title p-b-53">
                    <h1>Poke-Trainers</h1>
                  </div>

                  ===============================================
                  <div className="col-md-12 card card-body mb-3">
                  <img alt="" className="pp" src="http://whatsbits.com/uploads/10-2015/563202ba903c1.jpeg"/><br/>
                  
                  </div>
                  <button className="login100-form-btn" id="edit-button" data-toggle="modal" data-target="#edit-profile" type="button">Edit Profile</button>
                  ===============================================
                </div>
              </div>
            </div>
          </div>
         
            
          <div id="dropDownSelect1" />

            </React.Fragment>
        )
    }
}

export default PokeTrainerLayout