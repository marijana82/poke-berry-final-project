import "./Card.css";
import React from "react";
import {POKEMON_SPRITES_CHARMANDER} from "../../../assets/images/constants";



function Card({onClick, pokemonImage, pokemonName, pokemonType, pokemonStatName, pokemonStats, pokemonExtra}) {

    return(
        <div className="card" onClick={onClick}>
            <div className="card-back">
                <div className="back-main-card-container">
                    <div className="back-image-container">
                        <img
                            className="pokemon-image"
                            src={POKEMON_SPRITES_CHARMANDER}
                            alt="pokemon-image"
                        />
                    </div>
                    <div className="back-content-container">
                        <h2 className="pokemon-name">Name{pokemonName}</h2>
                        <span className="pokemon-type">Type{pokemonType}</span>

                        <div className="pokemon-stats">
                            <p>Stats{pokemonStatName} : {pokemonStats}</p>
                        </div>
                        <h2 className="pokemon-logo">Extra information{pokemonExtra}</h2>

                    </div>

                </div>
            </div>
            <div className ="card-front">FRONT</div>
        </div>
    )
}

export default Card;