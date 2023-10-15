import "./TabOne.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonEvolution from "../pokemon-evolution/PokemonEvolution";
import PokemonColor from "../pokemon-color/PokemonColor";
import PokemonHabitat from "../pokemon-habitat/PokemonHabitat";
import ButtonReset from "../button-reset/ButtonReset";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {Link} from "react-router-dom";
import SpeechBubble from "../speech-bubble/SpeechBubble";

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


    /*evolution*/
    const handleClickEvolution = event => {
        setIsEvolutionOnClick(current => !current);
        setPokeEvolution(tabOneInfo.evolves_from_species.url);
    }

    const resetSearchEvolution = () => {
        console.log("button is clicked")
        setIsEvolutionOnClick(false);
        setPokeEvolution({});
    }

    /*color*/
    const handleClickColor = event => {
        setIsColorOnClick(current => !current);
        setPokeColor(tabOneInfo.color.url);
    }

    /*habitat*/
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

                <div className="tab-one-container-text">

                    <div className="tab-one-title-container">
                        <h2 className="transition">My name is {singlePokemon.name}.</h2>
                    </div>

                    <div className="pokemon-stats-container">

                        {/*1.color*/}
                        <div
                            onClick={handleClickColor}
                            className="color-container"
                            role="button"
                            tabIndex='0'
                        ><h3 className="change-color-on-hover-color">My color is  {tabOneInfo.color.name}.</h3>
                        </div>

                        {/*2.shape*/}
                        <h3>My shape is {tabOneInfo.shape.name}.</h3>

                        {/*3.habitat*/}
                        <div
                            onClick={handleClickHabitat}
                            className="habitat-container"
                            role="button"
                            tabIndex='0'
                        ><h3 className="change-color-on-hover-habitat">I live in the {tabOneInfo.habitat.name}.</h3>
                        </div>

                        {/*4.growth*/}
                        <h3>I grow {tabOneInfo.growth_rate.name} speed.</h3>


                        {/*5.evolution*/}
                        <div
                            onClick={handleClickEvolution}
                            className="evolution-container"
                            role="button"
                            tabIndex='0'
                        >

                            <h3 className="change-color-on-hover-evolution"
                            >I evolve from {tabOneInfo.evolves_from_species.name}.
                            </h3>

                        </div>

                    </div>

                </div>

                    :

                <SpeechBubble/>
            }

            <div className="button-and-bubble-container">

                {isEvolutionOnClick && singlePokemon && tabOneInfo
                    ?
                    <ButtonReset
                        children="close"
                        resetHandler={resetSearchEvolution}
                    />

                    :

                    <>
                        <div className="speech-bubble">
                            <p>choose color, living area or evolution for more information</p>
                        </div>

                        <div className="speech-bubble">
                            <Link to={`/pokemon-list-page`}>
                                <AiOutlineArrowLeft
                                    style={
                                        {color: 'blue', fontSize: '34px', fontWeight: 'bold'}}
                                />
                            </Link>
                            <p>or click on arrow to go back to pokemon overview</p>
                        </div>
                    </>
                }


            </div>



            <div className="tab-one-click-results">

            {/*evolution*/}
            {tabOneInfo.evolves_from_species
            && singlePokemon
            && pokeEvolution !=={}
                && isEvolutionOnClick

                &&

                    <PokemonEvolution
                        dataEvolution={pokeEvolution}
                        evolvesFrom={singlePokemon.name}
                    />
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


        </div>
    )
}

export default TabOne;