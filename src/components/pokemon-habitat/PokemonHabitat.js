import "./PokemonHabitat.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonOnMouseOver from "../pokemon-on-mouse-over/PokemonOnMouseOver";


function PokemonHabitat({habitat, evolvesFrom, singlePokemon}) {

    const [pokemonHabitat, setPokemonHabitat] = useState({});

    async function fetchPokemonHabitat() {
        try{
            const resultHabitat = await axios.get(`${habitat}`);
            console.log(resultHabitat.data);
            setPokemonHabitat(resultHabitat.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPokemonHabitat();
    }, [habitat]);



    return(
        <div className="main-result-container-habitat">

            { pokemonHabitat &&
                pokemonHabitat.name &&
                pokemonHabitat.pokemon_species &&

                <div className="result-introduction-container">
                    <h4>{evolvesFrom} lives in {pokemonHabitat.name}, just like the other {pokemonHabitat.pokemon_species.length} pokemon: </h4>
                </div>
            }

            <div className="result-introduction-container">
                {pokemonHabitat &&
                    pokemonHabitat.pokemon_species &&
                    pokemonHabitat.pokemon_species.map((habitatSpecies) => {
                        return(

                                    <PokemonOnMouseOver
                                        key={`${habitatSpecies.name}-${habitatSpecies.url}`}
                                        endpointHabitatSpecies={habitatSpecies.url}
                                    />

                        )
                    })}
            </div>




        </div>
    )
}

export default PokemonHabitat;