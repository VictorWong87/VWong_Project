import React, { Component } from 'react';
import axios from "axios";
import cheerio from "cheerio";
import fs from "fs"
// import './login.css';
// import '../../index.css';
// import { LoginLayout } from './loginLayout';

class Webscrape extends Component {
  

  onClickLogin = () => {
    axios.get('https://www.pokemon.com/pc/games/grand-theft-auto-v/115461')
    .then((response) => {
        if(response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html); 
            let pokemon = [];
            $('div.site.container_24').each(function(i, elem) {
                pokemon[i] = {
                    title: $(this).find('h1.grid_17.ats-prod-title').text()/*.trim()*/,
                    // bloop: $(this).children('.index-article-link').attr('href'),
                    // price: $(this).find('span.full-bold.no-wrap').text(),
                }      
            });
            const pokemonTrimmed = pokemon.filter(n => n !== undefined )
            fs.writeFile('pokemon.json', 
                          JSON.stringify(pokemonTrimmed, null, 4), 
                          (err)=> console.log('File successfully written!'))
    }
}, (err) => console.log(err) );
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
    return (
      <React.Fragment>
       <button
            type="button"
            className="test1 btn-primary"
            onClick={this.onClickLogin}
        >Test
        </button>
      </React.Fragment>
    );
  }
}

export default Webscrape;
