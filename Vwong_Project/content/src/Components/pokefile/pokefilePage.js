import React, { Component } from 'react';
import '../../index.css';
import  PokeFileLayout  from './pokefileLayout';
// import axios from "axios";

class PokeFilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts:[]
    }
  }
  componentDidMount() {
    //   axios.get("https://jsonplaceholder.typicode.com/photos")
    //   .then(response => {
    //       let posts = response.data.slice(0,5);

    //       this.setState({
    //           posts:posts
    //       })
    //   })
    //   .catch(error => {
    //       console.error(error);
    //   })
  }

  onClickPokefile = () => {
    // this.props.history.push('/user/home');
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
      // const displayPosts = this.state.posts.map((x) => {
      //     return (<p key={x.id}>{x.title} </p>)
      // })
    return (
      <React.Fragment>

         

       <PokeFileLayout
             onChange={this.onChange}
             onClickPokefile={this.onClickPokefile}
             onchangeInput={this.onChangeInput}
        />
          
      </React.Fragment>
    );
  }
}

export default PokeFilePage;
