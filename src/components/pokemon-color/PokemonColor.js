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


            {pokemonColor && pokemonColor.pokemon_species &&
                pokemonColor.pokemon_species.map((pokeSpecies) => {
                    return(

                            /*<ul className="pokemon-color-list">
                                <li>
                                    <h4 className="color-lettertype"> {pokeSpecies.name}</h4>
                                </li>
                            </ul>*/


                        <button>
                            <h4 className="color-lettertype"> {pokeSpecies.name}</h4>
                        </button>



                    )

            })}



        </>


    )
}

export default PokemonColor;