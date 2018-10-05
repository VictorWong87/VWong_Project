import React from "react";
import TextInput from "../Common/TextInput";
import axios from "axios";
import "./webscrape.css";
import $ from "jquery"


class MapQuest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
        formErrors: {
            location:''
        },
            locationValid:false
        }
    }

    handleChange = (evt) => {
        evt.preventDefault();
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        }, () => this.validateField(key, val))
    }

    handleClick = () => {

        axios.post("http://www.mapquestapi.com/geocoding/v1/address?key=xXZTZ0rxYWj9UT3T3aBAQYQi2DTpXKya",{
            location: this.state.location
        })
        .then(response => {
            console.log("Posting a post in mapquest for : " ,this.state.location);
            // return console.log("Location : ", this.state.location)
        })
        .catch(err => {
            console.log(err)
        })
        axios.get("http://www.mapquestapi.com/geocoding/v1/address?key=xXZTZ0rxYWj9UT3T3aBAQYQi2DTpXKya&location="+this.state.location)
        .then(response => {
            console.log(response.request.response)
            // const lat = response.request.response.slice(805,814)
            // const long = response.request.response.slice(820,831)
            // const rand = response.request.response.slice(1018,1033)
            // console.log("MapURL : ",response.request.responseText.slice(842,1034)) 
            // console.log("Rand : ",response.request.response.slice(1018,1033))
            // console.log("Lat : ", response.request.response.slice(805,814))
            // console.log("Long : ",response.request.response.slice(820,831))
            $("#map").append(response.request.response.slice(842,1033))
            $(".map").append(response.request.response.slice(842,1033))
        })
        .catch(err => {
            console.log(err)
        })
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;;
        let locationValid = this.state.locationValid;
      
        switch (fieldName) {
            
            case 'location':
                locationValid = value > 1;
                fieldValidationErrors.location = locationValid ? '' : 'Has more than 1 Value';
                console.log(this.state.location)
                break;
            default:
                break
        }
        this.setState({
            formErrors: fieldValidationErrors,
            locationValid: locationValid
        }, this.validateForm);
      }
      
      
      validateForm = () => {
        this.setState({
            formValid:               
                this.state.locationValid
        });
      }
    render() {
        return (
            <React.Fragment>
                
                <div id="map" alt=""></div>
                <img id="map" src="" alt="mapquest"/>
                    <div className="col-md-12 card card-body mb-3">
                    <div className="location-info card "></div>
                    <label><h3>Find Pokemon</h3></label>
                        <label>Location: 
                            <TextInput
                                className="input100" 
                                type="text" 
                                id="location"
                                name="location-place"
                                val={this.state.location}
                                handleChange={this.handleChange}
                            />
                        </label>
                        <button 
                            
                            className="login100-form-btn" 
                            onClick={this.handleClick}
                        >
                        Pokemon Location
                        </button>
                    </div>
                
            </React.Fragment>
        )
    }
    
}

export default MapQuest