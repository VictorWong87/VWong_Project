import React, {Component} from 'react';
import './pokefile.css';
import axios from "axios";
import Navbar from "../navbar/navbar";
// import TextInput from "../Common/TextInput"
import PokefileModal from "./pokefileModal";
import MapQuest from "../WebScraping/webscrape"



class PokeFileLayout extends Component {
    constructor(props){
        super(props);
        this.state = ({
            user:[],
            comments:[]
        })
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then(response => {
            let comments = response.data.slice(0,1)
  
            this.setState({
                comments:comments
            })
        })
        .catch(error => {
            console.error(error);
        })
    
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            let user = response.data.slice(0,1)
  
            this.setState({
                user:user
            })
        })
        .catch(error => {
            console.error(error);
        })
    }
render() {
    const displayPosts = this.state.user.map((x) => {
        return (<p key={x.id}> Name: {x.name} <br/> Email: {x.email} <br/> Phone Number: {x.phone} <br/>  </p>)
    })
    const displayComments = this.state.comments.map((x) => {
        return (<p key={x.id}> About Me: <br/> {x.body}<br/>  </p>)
    })
    return (
      <React.Fragment>
          
        <Navbar/>
      
          <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("http://www.sompaisoscatalans.cat/simage/13/134448/pokemon-4k-wallpaper.jpg")'}}>
              <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                <div className="login100-form validate-form flex-sb flex-w">
                <div className="w-full text-center">
                   
                  </div>

                  <div className="Pokefile100-form-title p-b-53">
                    <h1>Poke-File</h1>
                  </div>

                  ===============================================
                  <div className="col-md-12 card card-body mb-3">
                  <img alt="" className="pp" src="http://whatsbits.com/uploads/10-2015/563202ba903c1.jpeg"/><br/>
                    <div>{displayPosts}</div><br/>
                    <div>{displayComments}</div>
                  </div>
                  <button className="login100-form-btn" id="edit-button" data-toggle="modal" data-target="#edit-profile" type="button">Edit Profile</button>
                  ===============================================
                </div>
              </div>
            </div>
          </div>
         
            
          <div id="dropDownSelect1" />
          <PokefileModal />
          <MapQuest/>
      </React.Fragment>
    );}
  }

  export default PokeFileLayout