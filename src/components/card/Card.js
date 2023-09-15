import "./Card.css";
import React from "react";
import {POKEMON_DREAM_WORLD, POKEMON_SPRITES_FRONT} from "../../assets/images/constants";
import PokemonCard from "../pokemon-card/PokemonCard";


function Card({ pokemon, loading, pokemonClick }) {
    console.log(pokemon);
    return(
        <>

            {
               pokemon &&

                    pokemon.map((onePokemon) => {
                        return(
                            <>

                                <div className="card" key={onePokemon.id} onClick={() => pokemonClick(onePokemon)}>
                                    <h2>{onePokemon.id}</h2>
                                    <img src={onePokemon.sprites.other.dream_world.front_default} alt="pokemon-image"/>
                                    <h2>{onePokemon.name}</h2>
                                </div>
                            </>
                        );
                    } )
            }

        </>
    )
}

export default Card;