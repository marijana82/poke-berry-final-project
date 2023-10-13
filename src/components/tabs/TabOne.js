import "./TabOne.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonEvolution from "../pokemon-evolution/PokemonEvolution";
import PokemonColor from "../pokemon-color/PokemonColor";
import PokemonHabitat from "../pokemon-habitat/PokemonHabitat";

function TabOne({singlePokemon}) {

    const [tabOneInfo, setTabOneInfo] = useState({});
    const [pokeEvolution, setPokeEvolution] = useState({});
    const [pokeColor, setPokeColor] = useState({});
    const [pokeHabitat, setPokeHabitat] = useState({});
    //to click and unclick
    const [isEvolutionOnClick, setIsEvolutionOnClick] = useState(false);
    const [isColorOnClick, setIsColorOnClick] = useState(false);
    const [isHabitatOnClick, setIsHabitatOnClick] = useState(false);


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


    const handleClickEvolution = event => {
        setIsEvolutionOnClick(current => !current);
        setPokeEvolution(tabOneInfo.evolves_from_species.url);
    }

    const handleClickColor = event => {
        setIsColorOnClick(current => !current);
        setPokeColor(tabOneInfo.color.url);
    }

    const handleClickHabitat = event => {
        setIsHabitatOnClick(current => !current);
        setPokeHabitat(tabOneInfo.habitat.url);
    }

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

                        <h2 className="transition">Hi there {singlePokemon.name}!</h2>


                    {/*color*/}
                    <div
                        onClick={handleClickColor}
                        className="color-container"
                    ><h3 className="change-color-on-hover-color">color: {tabOneInfo.color.name}</h3>
                    </div>


                    <h3>shape: {tabOneInfo.shape.name}</h3>

                    {/*habitat*/}
                    <div
                        onClick={handleClickHabitat}
                        className="habitat-container"
                    ><h3 className="change-color-on-hover-habitat">habitat: {tabOneInfo.habitat.name}</h3>
                    </div>



                    <h3>growth: {tabOneInfo.growth_rate.name}</h3>


                    {/*evolution*/}
                        <div
                            onClick={handleClickEvolution}
                            className="evolution-container"
                        ><h3 className="change-color-on-hover-evolution">evolves from: {tabOneInfo.evolves_from_species.name}</h3>
                        </div>

                </div>

                    :

                    <p>Information is loading. Thank you for waiting...</p>
            }

            {tabOneInfo.evolves_from_species
            && singlePokemon
            && pokeEvolution !=={}
                && isEvolutionOnClick

                ?

                <PokemonEvolution
                    dataEvolution={pokeEvolution}
                    evolvesFrom={singlePokemon.name}
                />

                :

                <p>click for more information</p>

            }

            {/*color*/}
            {tabOneInfo.color
                && pokeColor !=={}
                && isColorOnClick

                &&

                    <PokemonColor
                        color={pokeColor}
                        evolvesFrom={singlePokemon.name}
                    />
            }


            {/*habitat*/}
            {tabOneInfo.habitat
                && pokeHabitat !=={}
                && isHabitatOnClick

                &&

                //TODO compare how I did this to how I want to implement the hover function
                <PokemonHabitat
                    habitat={pokeHabitat}
                    evolvesFrom={singlePokemon.name}
                    singlePokemon={singlePokemon}
                />
            }








        </div>
    )
}

export default TabOne;