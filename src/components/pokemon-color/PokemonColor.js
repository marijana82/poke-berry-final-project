import "./PokemonColor.css";
import React, {useEffect, useState} from "react";
import axios from "axios";


function PokemonColor({color, evolvesFrom}) {

    const [pokemonColor, setPokemonColor] = useState([]);

    async function fetchPokemonColors() {

        try{

            const resultColor = await axios.get(`${color}`);
            console.log(resultColor.data);
            setPokemonColor(resultColor.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPokemonColors();
    }, [color]);

    return(

        <>
            { pokemonColor &&
                pokemonColor.name &&
                pokemonColor.pokemon_species &&

                <h4>{evolvesFrom} is {pokemonColor.name}, just like these other {pokemonColor.pokemon_species.length} pokemon:</h4>

            }

            <div className="result-introduction-container">
            {pokemonColor && pokemonColor.pokemon_species &&
                pokemonColor.pokemon_species.map((pokeSpecies) => {
                    return(

                        <div className="pokemon-list-button">
                            <h3 className="habitat-lettertype"> {pokeSpecies.name}</h3>
                        </div>

                    )
            })}
            </div>



        </>


    )
}

export default PokemonColor;