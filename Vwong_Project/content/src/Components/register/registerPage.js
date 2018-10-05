import React, { Component } from 'react';
import './register.css';
import '../../index.css';
import RegisterLayout  from './registerLayout';
import axios from "axios";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        salt:"",
        gender:"",
        phoneNumber:"",
        zipCode:"",
          formErrors: { 
            firstName: "", 
            middleName:"", 
            lastName: "",
            email: "", 
            password: "", 
            passwordConfirm: "", 
            gender:"", 
            phoneNumber:"", 
            zipCode:"" 
          },
        firstNameValid: false,
        middleNameValid: false,
        lastNameValid: false,
        emailValid: false,
        passwordValid: false,
        passwordConfirmValid: false,
        genderValid: false,
        phoneNumberValid: false,
        zipCodeValid: false,
        formValid: false,
        submitRegister: true
        
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
        password: this.state.password,
        firstName: this.state.firstName,
        middleName: this.state.middleName,
        lastName: this.state.lastName,
        gender: this.state.gender,
        phoneNumber: this.state.phoneNumber,
        zipCode: this.state.zipCode
      })
      .then(response => {
        console.log("Response: ", response.config.data);
        return console.log("Register Form Info : " , 
        " Email : ",this.state.email,
        " Password : ",this.state.password,
        " First Name : ",this.state.firstName,
        " Middle Name : ",this.state.middleName,
        " Last Name : ",this.state.lastName,
        " Gender : ",this.state.gender,
        " Phone Number : ",this.state.phoneNumber,
        " Zip Code : ",this.state.zipCode,
         )
      })
      .catch(error => {
        console.log(error);
      });
    axios.get('/user/register', {
        
    })
    .then(response => {
        console.log("Response: ", response.data.item[response.data.item.length-1]);
        return console.log("Register Form Info : " , 
        " Email : ",this.state.email,
        " First Name : ",this.state.firstName,
        " Middle Name : ",this.state.middleName,
        " Last Name : ",this.state.lastName,
        " Gender : ",this.state.gender,
        " Phone Number : ",this.state.phoneNumber
         )
      })
      .catch(error => {
        console.log(error);
      });

      this.props.history.push('/',);
}



validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let middleNameValid = this.state.middleNameValid;
    let lastNameValid = this.state.lastNameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let passwordConfirmValid = this.state.passwordConfirmValid;
    let genderValid = this.state.genderValid;
    let phoneNumberValid = this.state.phoneNumberValid;
    let zipCodeValid = this.state.zipCodeValid;

    switch (fieldName) {
        case 'firstName':
            firstNameValid = value.length < 15 /*&& value.length < 15*/
            fieldValidationErrors.firstName = firstNameValid ? '' : 'Between 1 and 15 Characters'
            console.log(this.state.firstName)
            break;
        case 'middleName':
            lastNameValid = value.length < 10 /*&& value.length < 15*/
            fieldValidationErrors.lastName = lastNameValid ? '' : 'Between 1 and 10 Characters'
            console.log(this.state.middleName)
            break;
        case 'lastName':
            lastNameValid = value.length < 20 /*&& value.length < 20*/
            fieldValidationErrors.lastName = lastNameValid ? '' : 'Between 1 and 20 Characters'
            console.log(this.state.lastName)
            break;
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
        case 'passwordConfirm':
            passwordConfirmValid = value === this.state.password
            fieldValidationErrors.passwordConfirm = passwordConfirmValid ? '' : 'Passwords do not match'
            break;
        case 'gender':
            genderValid = value.length > 0 && value.length < 6
            fieldValidationErrors.gender = genderValid ? '' : 'Male or Female'
            console.log(this.state.gender)
            break;
        case 'phoneNumber':
        phoneNumberValid = value.length < 16 /*&& value.length < 20*/ && `${this.state.phoneNumber.slice(0,3) + '-' + this.state.phoneNumber.slice(3, 6) + '-' +this.state.phoneNumber.slice(6)}`
            fieldValidationErrors.phoneNumber = phoneNumberValid ? '' : 'Need Area Code and 7 Digit Number'
            console.log(`${this.state.phoneNumber.slice(0,3) + '-' + this.state.phoneNumber.slice(3, 6) + '-' +this.state.phoneNumber.slice(6)}`)
            break;
        default:
            break
    }
    this.setState({
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        middleNameValid: middleNameValid,
        lastNameValid: lastNameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        passwordConfirmValid: passwordConfirmValid,
        genderValid: genderValid,
        phoneNumberValid: phoneNumberValid,
        zipCodeValid: zipCodeValid,
    }, this.validateForm);
}


validateForm = () => {
    this.setState({
        formValid:
            this.state.firstNameValid &&
            this.state.middleNameValid &&
            this.state.lastNameValid &&                
            this.state.emailValid &&
            this.state.passwordValid &&
            this.state.passwordConfirmValid &&
            this.state.genderValid &&
            this.state.phoneNumberValid &&
            this.state.zipCodeValid

    });
}


render() {
    console.log("register.render", this.state.formValid)
    return (
        
        <React.Fragment>
          
            <RegisterLayout
             state={this.state}
             handleChange={this.handleChange}
             handleClick={this.handleClick}
             />

        </React.Fragment >
    )

}
}

export default RegisterPage;
