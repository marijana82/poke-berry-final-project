import "./PokemonCard.css";
import React from "react";
import {POKEMON_SPRITES_FRONT} from "../../assets/images/constants";

function PokemonCard() {
    return(
        <>
            <div className="hover-card-container">
                <div className="card-hover">
                    <div className="image-container">
                        <img src={POKEMON_SPRITES_FRONT} alt="image-of-pokemon"/>
                    </div>
                    <div className="content">
                        <h3>TITLE</h3>
                        <p>Height: HEIGHT cm</p>
                        <p>Weight: WEIGHT cm</p>
                        <p>Type: TYPE </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PokemonCard;