import React, { Component } from 'react';
import './login.css';
import '../../index.css';
import { LoginLayout } from './loginLayout';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onClickLogin = () => {
    this.props.history.push('/user/home');
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
       <LoginLayout
          onChange={this.onChange}
          onChangeInput={this.onChangeInput}
          onClickLogin={this.onClickLogin}
        />
          
      </React.Fragment>
    );
  }
}

export default LoginPage;
