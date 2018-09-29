import React, {Component} from 'react';
import './pokefile.css';
import axios from "axios";
import Navbar from "../navbar/navbar"



class PokeFileLayout extends Component {
    constructor(props){
        super(props);
        this.state = ({
            comments:[]
        })
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            let comments = response.data.slice(0,1);
  
            this.setState({
                comments:comments
            })
        })
        .catch(error => {
            console.error(error);
        })
    }
render() {
    const displayPosts = this.state.comments.map((x) => {
        return (<p key={x.id}>{x.id} - {x.name} - {x.body}  </p>)
    })
    return (
      <React.Fragment>
          
        <Navbar/>
      
          <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("http://www.sompaisoscatalans.cat/simage/13/134448/pokemon-4k-wallpaper.jpg")'}}>
              <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                <form className="login100-form validate-form flex-sb flex-w">
                <div className="w-full text-center">
                   
                  </div>

                  <div className="Pokefile100-form-title p-b-53">
                    <h1>Poke-File</h1>
                  </div>

                  ===============================================
                  <div>
                    <div>{displayPosts}</div>
                  </div>
                  ===============================================
                </form>
              </div>
            </div>
          </div>
          <div id="dropDownSelect1" />
          
      </React.Fragment>
    );}
  }

  export default PokeFileLayout