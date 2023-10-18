import "./EvolutionStageTwo.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import BasicPoke from "../basic-poke-url/BasicPoke";


function EvolutionStageTwo({ evolvesInto, evolutionUrl }) {

    const [evolutionStageTwo, setEvolutionStageTwo] = useState({});

    async function fetchEvolutionStageTwo() {

        try {
            const resultEvolutionTwo = await axios.get(evolutionUrl);
            console.log(resultEvolutionTwo.data);
            setEvolutionStageTwo(resultEvolutionTwo.data);

        } catch(e) {
            console.error(e);
        }
    }


    useEffect(() => {
        fetchEvolutionStageTwo();
    }, [evolutionUrl]);



    return(
        <>

            {evolvesInto && evolutionStageTwo &&
                <>
                    <h2>Evolves into: {evolvesInto}</h2>

                    <BasicPoke
                        pokemonId={evolutionStageTwo.id}
                    />
                </>

            }

        </>
    )
}

export default EvolutionStageTwo;