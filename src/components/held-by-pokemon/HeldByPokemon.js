import "./HeldByPokemon.css";
import React from "react";


function HeldByPokemon({ berryItem }) {
    return(
        <>

            <h2 className="berry-titles">{berryItem.name} is held by pokemon:</h2>

            {berryItem && berryItem.held_by_pokemon.length > 0

                ?

                berryItem.held_by_pokemon.map((heldBy) => {

                    return(
                        <div className="berry-held-by-pokemon-container">
                            <ul>
                                <li key={berryItem.id}>
                                    {heldBy.pokemon.name}
                                </li>
                            </ul>
                        </div>
                    );})

                :

                <p>this berry is held by zero pokemon</p>
            }

        </>
    );
}

export default HeldByPokemon;