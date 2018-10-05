import React, {Component} from "react";
import '../../index.css';
import PokeTrainerLayout from "./pokeTrainerLayout";

class pokeTrainerPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    handleClick = (evt) => {
        evt.preventDefault();
    }
       handleChange = evt => {
        evt.preventDefault()
        const key = evt.target.name
        const val = evt.target.value
        this.setState({
            [key]: val
        }, () => this.validateField(key, val))
    }
    render() {
        return (
            <React.Fragment>

                <PokeTrainerLayout
                    state={this.state}
                    onClick={this.handleClick}
                    onChange={this.handleChange}
                />

            </React.Fragment>
        )
    }
}

export default pokeTrainerPage