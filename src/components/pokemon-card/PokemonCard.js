import "./PokemonCard.css";
import React from "react";

function PokemonCard({pokemon, loading, pokemonClick, key, assets, type, title, weight, height, id}) {
    console.log(pokemon);

    return(
        <>
            {pokemon &&

                pokemon.map((onePokemon) => {
                    return(
                        <>
                            <div
                                className="hover-card-container"
                                key={onePokemon.id}
                                onClick={() => pokemonClick(onePokemon)}
                            >
                                <div className="card-hover">
                                    <div className="image-container">
                                        <img src={onePokemon.sprites.other.dream_world.front_default}
                                             alt="image-of-pokemon"/>
                                    </div>
                                    <div className="content">
                                        <h2>{onePokemon.name}</h2>
                                        <h3>id: {onePokemon.id}</h3>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>
    )
}

export default PokemonCard;