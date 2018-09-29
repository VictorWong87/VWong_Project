import React from 'react';
import '../../index.css';
import { HomeForm } from "../home/homeForm"
import  Navbar  from "../navbar/navbar"


export const HomeLayout = (props) => {
 
    return (
      <React.Fragment>

      		<Navbar/>

        	<HomeForm/>

      </React.Fragment>
    );
  }


