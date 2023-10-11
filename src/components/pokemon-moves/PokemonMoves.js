import "./PokemonMoves.css";
import React from "react";


function PokemonMoves({moves, data}) {
    return(
        <>
            <h2>{data.name}'s top 10 moves:</h2>
            {moves &&
                moves.splice(10,10).map((move) => {
                    return(
                        <>
                            <h3>{move.move.name}</h3>
                        </>
                    )
                })
            }
        </>
    )
}

export default PokemonMoves;