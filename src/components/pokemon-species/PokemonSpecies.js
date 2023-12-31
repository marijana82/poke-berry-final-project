import "./PokemonSpecies.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonEvolutionChain from "../pokemon-evolution-chain/PokemonEvolutionChain";

function PokemonSpecies({ speciesUrl, speciesId, pokeImage }) {

    const [species, setSpecies] = useState({});

    async function fetchPokeSpecies() {
        try {
            const resultSpecies = await axios.get(`${speciesUrl}`);
            setSpecies(resultSpecies.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPokeSpecies();
    }, [speciesId]);



    return(
        <>
            {species &&
                species.name &&
                species.evolution_chain &&
                pokeImage &&

                <>


                        <PokemonEvolutionChain
                            evolutionUrl={species.evolution_chain.url}
                            pokeImage={pokeImage}
                            pokeName={species.name}
                        />




                </>
            }

        </>
    )
}


export default PokemonSpecies;