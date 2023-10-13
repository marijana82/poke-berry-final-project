import "./PokemonOnMouseOver.css";
import React, {useEffect, useState} from "react";
import axios from "axios";


function PokemonOnMouseOver({ habitatUrl, habitatSpecies, onMouseOver, onMouseOut, pokemonClick }) {

    const [pokemonInHabitat, setPokemonInHabitat] = useState({});

    async function fetchPokemonInHabitat() {
        try {
            const resultPokeInHabitat = await axios.get(`${habitatUrl}`);
            console.log(resultPokeInHabitat.data);
            setPokemonInHabitat(resultPokeInHabitat.data);
            getSinglePokeInHab(resultPokeInHabitat.data);

        } catch(e) {
            console.error(e);
        }
    }

    function getSinglePokeInHab(urlTypes) {
        urlTypes.map((type) => {
            async function fetchSingleUrl() {
                try {
                    const responseSingleUrl = await axios.get(`${type.url}`);
                    console.log(responseSingleUrl);

                } catch(e) {
                    console.error(e);
                }
            }
            fetchSingleUrl();
        });

    }



    useEffect(() => {
        fetchPokemonInHabitat();
    }, []);

    return(
        <>
            {
                habitatUrl &&
                pokemonInHabitat &&

                        <>
                            <div
                                className="pokemon-list-button"
                                onMouseOver={onMouseOver}
                                onMouseOut={onMouseOut}
                                //key={}
                                //onClick={() => pokemonClick(oneHabitatSpecie)}
                            >
                                <h3 className="habitat-lettertype"> {pokemonInHabitat.name}</h3>
                            </div>

                        </>
            }
        </>
    )
}

export default PokemonOnMouseOver;