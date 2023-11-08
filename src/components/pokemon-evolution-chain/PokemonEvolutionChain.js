import "./PokemonEvolutionChain.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import EvolutionStageOne from "../evolution-stage-one/EvolutionStageOne";
import EvolutionStageTwo from "../evolution-stage-two/EvolutionStageTwo";
import SpeechBubble from "../speech-bubble/SpeechBubble";
import {Link} from "react-router-dom";


function PokemonEvolutionChain({ evolutionUrl, evolutionId, pokeImage, pokeName }) {

    const [evolutionChain, setEvolutionChain] = useState([]);

    async function fetchPokemonEvolutionChain() {
        try {
            const resultEvolution = await axios.get(evolutionUrl);
            setEvolutionChain(resultEvolution.data.chain);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPokemonEvolutionChain();
    }, [evolutionUrl]);

    return(
        <>



        <div className="result-container-evolution">

            { evolutionChain &&
                pokeName &&
                pokeImage &&
                evolutionChain.species &&
                evolutionChain.species.name &&
                evolutionChain.evolves_to[0] &&
                evolutionChain.evolves_to[0].species

                ?

                <div className="left-content-container-single">

                <div className="single-pokemon-image-container">

                        <div className="single-pokemon-name-container">
                            <div className="name">
                                <h2>Hi there {pokeName}!</h2>
                                <img
                                    src={pokeImage}
                                    className="single-pokemon-image"
                                />
                            </div>
                        </div>
                </div>

                </div>

                :

                <SpeechBubble
                    bubbleMessage="Sorry, there is no evolution chain available for this specific pokemon. Please try again."
                />


            }

            { evolutionChain &&
                evolutionChain.evolves_to &&
                evolutionChain.evolves_to.map((chain) => {
                    return(
                        <>
                            <div>
                                <Link
                                    to={`/single-pokemon-page/${chain.species.name}`}
                                    style={{textDecoration: 'none', color: 'lightblue'}}
                                >

                                <EvolutionStageOne
                                    evolvesInto={chain.species.name}
                                    evolutionUrl={chain.species.url}
                                />

                                </Link>
                            </div>


                    {chain.evolves_to.map((chainTwo) => {

                        return(

                            <Link
                                to={`/single-pokemon-page/${chainTwo.species.name}`}
                                style={{textDecoration: 'none', color: 'lightblue'}}
                            >

                                <EvolutionStageTwo
                                    evolvesInto={chainTwo.species.name}
                                    evolutionUrl={chainTwo.species.url}
                                />

                            </Link>

                        )
                    })}
                        </>
                    )
                })
            }



        </div>

        </>
    )
}

export default PokemonEvolutionChain;