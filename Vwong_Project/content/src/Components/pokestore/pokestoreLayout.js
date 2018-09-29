import React, {Component} from 'react';
import './pokestore.css';
import Navbar from "../navbar/navbar"



class PokeStoreLayout extends Component {
    constructor(){
        super();
        this.state = ({
            
        })
    }

render() {
    
    return (

      <React.Fragment>
          
        <Navbar/>
      
          
          <div className="container-pokestore100 center-1" style={{backgroundImage: 'url("https://www.wallpaperup.com/uploads/wallpapers/2014/02/12/253123/62c1d073c999e239d5322408e7a79680-1000.jpg")'}}>
            <img alt="..." className="top-left" src="https://www.postard.com/wp-content/uploads/2016/09/Pok%C3%A9mon_logo_English.png" id="pokestore"/>
             <h1 className="poke-store top-left1">Store</h1><br></br>

             <div className="poke-store center-items"><h2>Poke-Merch</h2><br/>
                <span>
                    <div className="col-md-4 poke-store item-1">
                            <img alt=".." className=" sunglasses " src="https://poketouch.files.wordpress.com/2016/10/pokemon_sunglasses_shades.jpg?w=648" />
                        <br/>Pokemon Sun Glasses - Pick from Bulbasaur, Pikachu, Charmander, and Squirtle. The 4 main pokemon from Season One of the Pokemon Series. Price: $4.00 or Whole set for $12.00!
                    </div>
                </span><br/>
                <span>
                    <div className="col-md-4 poke-store item-1">
                            <img alt=".." className="limitedEditionSwitch " src="https://i5.walmartimages.com/asr/0c5acc09-e65e-464b-b4b2-cf84e05a9937_1.444082c9bdd63e1b227dea52e7fdb18d.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff" />
                        <br/>Limited Edition Switch - Pikachu controller with pikachu's all over your console! Comes with a pokeball and the game, "Lets Go Pikachu!" Price: $399.97 while supplies last!
                    </div>
                </span><br/>
                <span>
                    <div className="col-md-4 poke-store item-1">
                            <img alt=".." className="pokemonTShirt " src="https://ae01.alicdn.com/kf/HTB1KxwGPVXXXXa1XFXXq6xXFXXXS/pokemon-t-shirt-big-Children-Clothing-kids-summer-fashion-t-shirts-boys-and-girls-tops-tees.jpg" />
                        <br/>Pokemon T-Shirt - All 720 Pokemon on One Shirt! Comes in Small, Medium, Large, and X-Large for all fans! Price: $25.00
                    </div>
                </span><br/>
                <span>
                    <div className="col-md-4 poke-store item-1">
                            <img alt=".." className="seasonOneCardPack " src="https://images-na.ssl-images-amazon.com/images/I/517jIvKx-8L.jpg" />
                        <br/>First Season (First Edition) Card Booster Pack - Original 150 Pokemon, 12 cards, Total of 1 Rare with a chance of a Holographic Card with 3 rares, 4 uncommons, and 8 common cards. Price: $5.00
                    </div>
                </span><br/>
                <span>
                    <div className="col-md-4 poke-store item-1">
                            <img alt=".." className="eeveeNinePackStuffed " src="https://c.76.my/Malaysia/pokemon-pikachu-eevee-evolution-soft-plush-toy-doll-9pcs-set-25cm-momogenki-1608-23-momogenki@2.jpg" />
                        <br/>All Stuffed Evolutions of Eevee - Get not just 1 but 9 of Eevee's Evolutions! Get it while it lasts! Price: $55.99
                    </div>
                </span><br/>
                <span>
                    <div className="col-md-4 poke-store item-1">
                            <img alt=".." className="conversePokemonShoes " src="https://img00.deviantart.net/a8bb/i/2010/117/5/4/pokemon_shoes_design_by_madshoes.jpg" />
                        <br/>Converse Limited Edition Pokemon Shoes by DeviantArt artist MadShoes - Custom, Original, and One-of-A-Kind shoes to brag about when out and about. Price: 199.99
                    </div>
                </span><br/>
                <span>
                    <div className="col-md-4 poke-store item-1">
                            <img alt=".." className="lEDWatches " src="https://ae01.alicdn.com/kf/HTB1xAifIFXXXXXcXpXXq6xXFXXX5/New-Fashion-Pokemon-Poke-Ball-Design-LED-Watch-Touch-Screen-Waterproof-Wristwatch-LED-Time-Display-Best.jpg" />
                        <br/>2 Pokemon Watch LED Based - Why get one when you can get 2 for the price of one? Here we have 2 LED watches that makes things light up your day! Choose from two colors: Black/Brown. Price: $22.97
                    </div>
                </span><br/>
                <span>
                    <div className="col-md-4 poke-store item-1">
                            <img alt=".." className="karatGold " src="https://i.redd.it/0mxe42ldto1z.jpg" />
                        <br/>23 Karat Gold Pokemon Collectible Cards to choose from: Togepi, Charizard, Pikachu, Poliwhirl, amd Mewtwo. Price: $8.99
                    </div>
                </span><br/>
             </div>
           </div>   
           
      </React.Fragment>
    );}
  }

  export default PokeStoreLayout