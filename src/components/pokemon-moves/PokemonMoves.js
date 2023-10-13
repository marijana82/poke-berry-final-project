import "./PokemonMoves.css";
import React from "react";


function PokemonMoves({moves, data}) {
    return(
        <>
            <div className="result-introduction-container">
                <h2>{data.name}'s top 10 moves:</h2>
            </div>

            <div className="result-introduction-container-moves">
                {moves &&
                    moves.splice(10,10).map((move) => {
                        return(
                            <>
                                <h3 className="transition">{move.move.name}</h3>
                            </>
                        )
                    })
                }
            </div>


        </>
    )
}

export default PokemonMoves;