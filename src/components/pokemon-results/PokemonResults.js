import "./PokemonResults.css";
import React from "react";
import PokemonCard from "../card/pokemon-card/PokemonCard";


function PokemonResults({pokeDetails}) {



    return(
        <>
            {Object.keys(pokeDetails).length > 0
                &&
                pokeDetails.types
                &&
                pokeDetails.types.map((typePoke) => {
                return(
                    <>
                        <PokemonCard
                            assets={pokeDetails.sprites.front_shiny}
                            title={pokeDetails.name}
                            height={pokeDetails.height}
                            weight={pokeDetails.weight}
                            type={typePoke.type.name}
                        />
                    </>

                );
            })}
        </>
    )
}

export default PokemonResults;
