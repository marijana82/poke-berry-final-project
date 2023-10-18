import "./EvolutionStageOne.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import BasicPoke from "../basic-poke-url/BasicPoke";
import SinglePokemon from "../../pages/single-item-page/SinglePokemon";
import SpeechBubble from "../speech-bubble/SpeechBubble";


function EvolutionStageOne({ evolvesInto, evolutionUrl }) {

    const [evolutionStageOne, setEvolutionStageOne] = useState({});

    async function fetchEvolutionStageOne() {

        try {
            const resultEvolutionOne = await axios.get(evolutionUrl);
            console.log(resultEvolutionOne.data);
            setEvolutionStageOne(resultEvolutionOne.data);

        } catch(e) {
            console.error(e);
        }

    }

    useEffect(() => {
        fetchEvolutionStageOne();
    }, [evolutionUrl]);


    return(
        <>
            {evolvesInto && evolutionStageOne

                ?

                <>
                    <h2>Evolves into: {evolvesInto}</h2>
                    <BasicPoke
                        pokemonId={evolutionStageOne.id}
                    />
                </>

                :

                <SpeechBubble
                    bubbleMessage="no results available"
                />

            }

        </>
    )
}


export default EvolutionStageOne;