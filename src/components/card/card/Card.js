import "./Card.css";
import React from "react";
import {POKEMON_DREAM_WORLD} from "../../../assets/images/constants";



function Card({onClick, pokemonImage, pokemonName, pokemonType, pokemonStatName, pokemonStats, pokemonExtra}) {

    return(
        <div className="card" onClick={onClick}>
            <div className="card-back">
                <div className="back-main-card-container">
                    <div className="back-image-container">
                        <img
                            className="pokemon-image"
                            src={POKEMON_DREAM_WORLD}
                            alt="pokemon-image"
                        />
                    </div>
                    <div className="back-content-container">
                        <h2 className="pokemon-name">Play!{pokemonName}</h2>
                        {/*<span className="pokemon-type">Type{pokemonType}</span>*/}

                        <div className="pokemon-stats">
                            <p>{pokemonStatName} {pokemonStats}</p>
                        </div>
                        <h2 className="pokemon-logo">Or click here to register{pokemonExtra}</h2>

                    </div>

                </div>
            </div>
            <div className ="card-front">
                <div className="clickable-text">
                    <h3>Click here to register</h3>
                    <p>Or flip to play</p>
                </div>

            </div>
        </div>
    )
}

export default Card;