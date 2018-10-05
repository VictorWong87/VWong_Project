import React from 'react';
import '../../index.css';
import  HomeForm  from "../home/homeForm";
import  Navbar  from "../navbar/navbar";

class HomeLayout extends React.Component {

  render() {  
    
    return (
        <React.Fragment>

      		<Navbar/>

        	<HomeForm/>

        </React.Fragment>
    )
  }
}

export default HomeLayout
