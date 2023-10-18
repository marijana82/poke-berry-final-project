import "./PokemonSpecies.css";
import React, {useEffect} from "react";
import axios from "axios";

function PokemonSpecies({ speciesUrl, speciesId }) {

    async function fetchPokeSpecies() {
        try {

            const resultSpecies = await axios.get(`${speciesUrl}`);
            const resultPokemonSpecies = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${speciesId}`);
            //console.log(resultSpecies.data);
            console.log(resultPokemonSpecies.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPokeSpecies();
    }, [speciesId]);



    return(
        <>


        </>
    )
}


export default PokemonSpecies;