import React, { Component } from 'react';
import '../../index.css';
import  HomeLayout from './homeLayout';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  handleClick = () => {
    console.log(this.state.location)
    // this.props.history.push('/user/map');
  }
  handleChange = evt => {
    evt.preventDefault()
    const key = evt.target.name
    const val = evt.target.value
    this.setState({
        [key]: val
    }, () => this.validateField(key, val))
}
  // onChangeInput = (onChange) => (e) => {
  //   onChange(e.target.name, e.target.value);
  // }

  // onChange = (fieldName, fieldValue) => {
  //   let nextState = {
  //       ...this.state,
  //       [fieldName]: fieldValue
  //   }
  //   this.setState(nextState, () => console.log(nextState));
  // }

  render() {
    return (
      <React.Fragment>
       <HomeLayout
             state={this.state}
             handleChange={this.handleChange}
             handleClick={this.handleClick}
        />
          
      </React.Fragment>
    );
  }
}

export default HomePage;
