import "./TabOne.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonEvolution from "../pokemon-evolution/PokemonEvolution";

function TabOne({singlePokemon}) {

    const [tabOneInfo, setTabOneInfo] = useState({});
    const [pokeEvolution, setPokeEvolution] = useState({});

    async function fetchPokeData() {

        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${singlePokemon.id}`)
            console.log(result.data);
            setTabOneInfo(result.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPokeData();
    }, [singlePokemon]);



    return(
        <div className="tab-one">
            {
                singlePokemon && tabOneInfo
                && tabOneInfo.evolves_from_species
                && tabOneInfo.color
                && tabOneInfo.shape
                && tabOneInfo.habitat
                && tabOneInfo.growth_rate
                && singlePokemon

                    ?

                <>
                    <h2>Hi there {singlePokemon.name}!</h2>

                    <h3>color: {tabOneInfo.color.name}</h3>
                    <h3>shape: {tabOneInfo.shape.name}</h3>
                    <h3>habitat: {tabOneInfo.habitat.name}</h3>
                    <h3>growth: {tabOneInfo.growth_rate.name}</h3>

                        <div
                            onClick={() => setPokeEvolution(tabOneInfo.evolves_from_species.url)}
                            className="evolution-container"
                        ><h3>evolves from: {tabOneInfo.evolves_from_species.name}</h3>
                        </div>



                </>

                    :

                    <p>Information is loading. Thank you for waiting...</p>
            }

            {tabOneInfo.evolves_from_species
            && singlePokemon
            && pokeEvolution !=={} ?

                <PokemonEvolution
                    dataEvolution={pokeEvolution}
                />

                :

                <p>no information found</p>

            }






        </div>
    )
}

export default TabOne;