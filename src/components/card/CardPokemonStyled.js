import "./CardPokemonStyled.css";
import React from "react";
import {POKEMON_DREAM_WORLD} from "../../assets/images/constants";

function CardPokemonStyled({pokemonName, pokemonType, pokemonStats, pokemonExtra, pokemonImage, pokemonStatName}) {
    return(
        <div className="main-pokemon-card-container">

                <div className="image-poke-container">
                    <img
                        src={pokemonImage}
                        alt="pokemon-image"
                        className="pokemon-image"/>
                </div>

                <div className="content-poke-container">
                    <h2 className="pokemon-name">{pokemonName}</h2>

                    <span className="pokemon-type">{pokemonType}</span>

                    <div className="pokemon-stats">
                        <p>{pokemonStatName} : {pokemonStats}</p>
                    </div>
                    <h2 className="pokemon-logo">{pokemonExtra}</h2>
            </div>
        </div>
    )
}

export default CardPokemonStyled;