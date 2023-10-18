import "./PokemonEvolutionChain.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import EvolutionStageOne from "../evolution-stage-one/EvolutionStageOne";
import EvolutionStageTwo from "../evolution-stage-two/EvolutionStageTwo";
import BasicPoke from "../basic-poke-url/BasicPoke";
import SpeechBubble from "../speech-bubble/SpeechBubble";


function PokemonEvolutionChain({ evolutionId, pokeImage, pokeName }) {

    const [evolutionChain, setEvolutionChain] = useState([]);

    async function fetchPokemonEvolutionChain() {
        try {
            const resultEvolutionChain = await axios.get(`https://pokeapi.co/api/v2/evolution-chain/${evolutionId}/`);
            console.log(resultEvolutionChain.data.chain);
            setEvolutionChain(resultEvolutionChain.data.chain);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchPokemonEvolutionChain();
    }, [evolutionId]);

    return(
        <>



        <div className="result-container-evolution">

            { evolutionChain &&
                pokeName &&
                evolutionChain.species &&
                evolutionChain.species.name &&
                evolutionChain.evolves_to[0] &&
                evolutionChain.evolves_to[0].species

                ?

                <div className="left-content-container-single">

                <div className="single-pokemon-image-container">

                    {evolutionChain.species &&
                        evolutionChain.species.name &&
                        <div className="single-pokemon-name-container">
                            <div className="name">
                                <h2>Hi there {pokeName}!</h2>
                                <p>You belong to {evolutionChain.species.name} evolution species.</p>
                            </div>
                        </div>
                    }

                    <img
                        src={pokeImage}
                        className="single-pokemon-image"
                    />
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

                                <EvolutionStageOne
                                    evolvesInto={chain.species.name}
                                    evolutionUrl={chain.species.url}
                                />
                            </div>


                    {chain.evolves_to.map((chainTwo) => {

                        return(

                                <EvolutionStageTwo
                                    evolvesInto={chainTwo.species.name}
                                    evolutionUrl={chainTwo.species.url}
                                />

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