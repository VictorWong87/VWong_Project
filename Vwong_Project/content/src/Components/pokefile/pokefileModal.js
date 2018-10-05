import React from "react";
import "./pokefile.css";
import TextInput from "../Common/TextInput"


class PokefileModal extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return(
            <React.Fragment>

            <div className="modal fade " id="edit-profile" >
            <form className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33 ">

                <div className="w-full text-center"/>

            <div>
                <h1>Update Poke-file</h1>
            </div><br/>
            <div>
                First Name:
                <div className="col-md-12 poke-store centered">
                    <TextInput type="text" className="firstName" id="firstName" />
                </div>
            </div>
            <div>
                Middle Name:
                <div className="col-md-12 poke-store centered">
                    <TextInput type="text" className="middleName" id="middleName" />
                </div>
            </div>
            <div>
                Last Name:
                <div className="col-md-12 poke-store centered">
                    <TextInput type="text" className="lastName" id="lastName" />
                </div>
            </div>
            <div>
                E-Mail:
                <div className="col-md-12  poke-store centered">
                    <TextInput type="email" className="email" id="email" />
                </div>
            </div>
            <div>
                Gender:
                <div className="col-md-12 poke-store centered">
                    <TextInput type="text" className="gender" id="gender" />
                </div>
            </div>
            <div>
                Phone Number:
                <div className="col-md-12 poke-store centered">
                    <TextInput type="text" className="phoneNumber" id="phoneNumber" />
                </div>
            </div>
            <div>
                Zip Code:
                <div className="col-md-12 poke-store centered">
                    <TextInput type="text" className="zipCode" id="zipCode" />
                </div>
            </div>
            <br/>

            <div>
                <form action="/user/uploads" encType="multipart/form-data" method="POST"> 
                    <input type="file" name="fileUpload" />
                    <input type="submit" value="File Upload"/>
                </form>
                <br/>
            </div>

            <button type="submit" className="login100-form-btn">Update Profile</button>
            </form>
            </div>
            </React.Fragment>
        )
    }
}

export default PokefileModal