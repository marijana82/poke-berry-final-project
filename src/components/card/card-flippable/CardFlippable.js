import "./CardFlippable.css";
import React from "react";
import CardPokemonStyled from "../CardPokemonStyled";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {POKEMON_DREAM_WORLD} from "../../../assets/images/constants";

function CardFlippable() {

    const [showFront, setShowFront] = useState(true);

    return(
        <div className="flippable-card-container">

            <CSSTransition
                in={showFront}
                timeout={300}
                classNames="flip"
            >
                <CardPokemonStyled
                    pokemonImage={POKEMON_DREAM_WORLD}
                    pokemonName="Pokemon Name"
                    pokemonType="Electric"
                    pokemonStatName="Stat name:"
                    pokemonStats="Power STAT"
                    pokemonExtra="Click to find out more"
                    onClick={() => {
                        setShowFront((valueCard) => !valueCard);
                    }}
                />
            </CSSTransition>

        </div>
    )
}

export default CardFlippable;