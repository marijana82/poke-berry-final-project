import "./Home.css";
import React from "react";
import {POKEMON_DREAM_WORLD} from "../../assets/images/constants";
import CardPokemonStyled from "../../components/card/CardPokemonStyled";
import PokemonCard from "../../components/pokemon-card/PokemonCard";


function Home() {
    return (
        <>
            <h1>This is Home page</h1>
            <div className="pokemon-card-container">
                <CardPokemonStyled
                    pokemonImage={POKEMON_DREAM_WORLD}
                    pokemonName="Pokemon Name"
                    pokemonType="Electric"
                    pokemonStatName="Stat name:"
                    pokemonStats="Power STAT"
                    pokemonExtra="Click to find out more"
                />

            </div>


        </>
    )
}

export default Home;