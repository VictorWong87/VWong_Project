import React, { Component } from 'react';
import '../../index.css';
import { HomeLayout } from './homeLayout';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  onClickHome = () => {
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
       <HomeLayout
             onChange={this.onChange}
             onClick={this.onClickHome}
        />
          
      </React.Fragment>
    );
  }
}

export default HomePage;
