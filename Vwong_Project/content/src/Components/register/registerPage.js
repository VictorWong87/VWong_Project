import React, { Component } from 'react';
import './register.css';
import '../../index.css';
import { RegisterLayout } from './registerLayout';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthday:'',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  onClickLogin = () => {
    this.props.history.push('/');
  }

  onChangeInput = (onChange) => (e) => {
    onChange(e.target.name, e.target.value);
  }

  onChange = (fieldName, fieldValue) => {
    let nextState = {
        ...this.state,
        [fieldName]: fieldValue
    }
    this.setState(nextState, () => console.log(nextState));
  }

  render() {
    return (
      <React.Fragment>
       <RegisterLayout
          onChange={this.onChange}
          onChangeInput={this.onChangeInput}
          onClickLogin={this.onClickLogin}
        />
          
      </React.Fragment>
    );
  }
}

export default RegisterPage;
