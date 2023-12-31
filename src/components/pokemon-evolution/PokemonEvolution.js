import "./PokemonEvolution.css";
import React, {useEffect, useState} from "react";
import axios from "axios";

function PokemonEvolution({dataEvolution, evolvesFrom}) {

    const [evolution, setEvolution] = useState([]);

    async function fetchEvolutionData() {
        try {
            const resultEvolution = await axios.get(`${dataEvolution}`);
            setEvolution(resultEvolution.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchEvolutionData();

    }, [dataEvolution]);



    return(
        <div className="main-result-container-evolution">

            {evolution &&
                evolution.name &&
                evolution.flavor_text_entries &&
                evolvesFrom

                &&

                <>
                    <div className="result-introduction-container">
                        <h4>{evolvesFrom} evolves from {evolution.name}</h4>
                    </div>

                    <div className="result-introduction-container">
                        <h4 className="evolution-lettertype">{evolution.name} is a {evolution.egg_groups[0].name} pokemon.</h4>
                        <h4 className="evolution-lettertype">{evolution.flavor_text_entries[0].flavor_text}</h4>
                    </div>


                </>

            }
        </div>
    )
}

export default PokemonEvolution;