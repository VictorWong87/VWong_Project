import React, { Component } from 'react';
import './login.css';
import '../../index.css';
import { LoginLayout } from './loginLayout';
import axios from "axios"

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
        formErrors: {
          email: '',
          password: ''
        },
      emailValid: false,
      passwordValid: false
    }
  }

  handleChange = evt => {
    evt.preventDefault()
    const key = evt.target.name
    const val = evt.target.value
    this.setState({
        [key]: val
    }, () => this.validateField(key, val))
}

handleClick = evt => {
    evt.preventDefault()
    console.log("state", this.state)
    
    axios.post('/user/register', {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log("Response: ", response.config.data);
        return console.log("Register Form Info : " , 
        " Email : ",this.state.email,
        " Password : ",this.state.password
         )
      })
      .catch(error => {
        console.log(error);
      });
    axios.get('/user/register', {
        
    })
    .then(response => {
        console.log("Response: ", response.data.item/*[response.data.item.length]*/);
        return console.log("Register Form Info : " , 
        " Email : ",this.state.email
         )
      })
      .catch(error => {
        console.log(error);
      });

      this.props.history.push('/user/home',);
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;

  switch (fieldName) {
      
      case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' Has no @ or .com';
          console.log(this.state.email)
          break;
      case 'password':
          passwordValid = value.length >= 8 && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/);
          fieldValidationErrors.password = passwordValid ? '' : ' is missing some Characters';
          console.log(this.state.password)
          break;
      default:
          break
  }
  this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
  }, this.validateForm);
}


validateForm = () => {
  this.setState({
      formValid:               
          this.state.emailValid &&
          this.state.passwordValid
  });
}
  render() {
    console.log("login.render", this.state.formValid)
    return (

      <React.Fragment>

       <LoginLayout
          state={this.state}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
        />
          
      </React.Fragment>
    );
  }
}

export default LoginPage;
