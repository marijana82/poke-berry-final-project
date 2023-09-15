import "./Home.css";
import React from "react";
import {POKEMON_DREAM_WORLD} from "../../assets/images/constants";
import CardPokemonStyled from "../../components/card/CardPokemonStyled";


function Home() {
    return (
        <>
            <h1>This is Home page</h1>
            <div className="pokemon-card-container">
                <CardPokemonStyled
                    pokemonName="Pokemon Name"
                    pokemonType="Electric"
                    pokemonStats="Power STAT"
                    pokemonExtra="Click to find out more"
                />
            </div>


        </>
    )
}

export default Home;