import "./PokemonHabitat.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonOnMouseOver from "../pokemon-on-mouse-over/PokemonOnMouseOver";
import {Link} from "react-router-dom";


function PokemonHabitat({habitat, evolvesFrom, singlePokemon}) {

    const [pokemonHabitat, setPokemonHabitat] = useState({});

    async function fetchPokemonHabitat() {
        try{
            const resultHabitat = await axios.get(`${habitat}`);
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

                            <Link
                                to={`/single-pokemon-page/${habitatSpecies.name}`}
                                style={{textDecoration: 'none', color: 'white'}}
                            >

                                    <PokemonOnMouseOver
                                        key={`${habitatSpecies.name}-${habitatSpecies.url}`}
                                        endpointHabitatSpecies={habitatSpecies.url}
                                    />

                            </Link>

                        )
                    })}
            </div>




        </div>
    )
}

export default PokemonHabitat;