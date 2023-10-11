import "./TabOne.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonEvolution from "../pokemon-evolution/PokemonEvolution";

function TabOne({singlePokemon}) {

    const [tabOneInfo, setTabOneInfo] = useState({});
    const [pokeEvolution, setPokeEvolution] = useState({});
    const [pokeColor, setPokeColor] = useState({});
    const [pokeImage, setPokeImage] = useState({});

    //to click and unclick
    const [isShownOnClick, setIsShownOnClick] = useState(false);

    const handleClick = event => {
        console.log("the button is clicked!")
        setIsShownOnClick(current => !current);
        setPokeEvolution(tabOneInfo.evolves_from_species.url);
    }

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

                <div className="tab-one-container">

                        <h2>Hi there {singlePokemon.name}!</h2>


                    {/*color*/}
                    <div
                        onClick={() => setPokeColor(tabOneInfo.color.url)}
                    ><h3>color: {tabOneInfo.color.name}</h3>
                    </div>


                    <h3>shape: {tabOneInfo.shape.name}</h3>
                    <h3>habitat: {tabOneInfo.habitat.name}</h3>
                    <h3>growth: {tabOneInfo.growth_rate.name}</h3>


                    {/*evolution*/}
                        <div
                            //onClick={() => setPokeEvolution(tabOneInfo.evolves_from_species.url)}
                            onClick={handleClick}

                            className="evolution-container"
                        ><h3>evolves from: {tabOneInfo.evolves_from_species.name}</h3>
                        </div>

                </div>

                    :

                    <p>Information is loading. Thank you for waiting...</p>
            }

            {tabOneInfo.evolves_from_species
            && singlePokemon
            && pokeEvolution !=={}
                && isShownOnClick

                ?

                <PokemonEvolution
                    dataEvolution={pokeEvolution}
                />

                :

                <p>click for more information</p>

            }








        </div>
    )
}

export default TabOne;