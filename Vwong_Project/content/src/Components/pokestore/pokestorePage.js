import React, { Component } from 'react';
import  PokeStoreLayout  from './pokestoreLayout';
// import axios from "axios";

class PokeStorePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return (
      <React.Fragment>

       <PokeStoreLayout
             onChange={this.onChange}
             onClick={this.onClickPokeStore}
        />
          
      </React.Fragment>
    );
  }
}

export default PokeStorePage;
