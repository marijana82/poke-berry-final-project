import "./PokemonEvolution.css";
import React, {useEffect, useState} from "react";
import axios from "axios";



function PokemonEvolution({dataEvolution, evolvesFrom}) {

    const [evolution, setEvolution] = useState([]);

    async function fetchEvolutionData() {
        try {
            const resultEvolution = await axios.get(`${dataEvolution}`);
            console.log(resultEvolution.data);
            setEvolution(resultEvolution.data);

        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchEvolutionData();

    }, [dataEvolution]);



    return(
        <>
            {evolution &&
                evolution.name &&
                evolution.flavor_text_entries &&
                evolvesFrom

                &&

                <div className="extra-information-container">

                        <h4>{evolution.name} evolves into {evolvesFrom}</h4>
                        <h4 className="evolution-lettertype">{evolution.name} is a {evolution.egg_groups[0].name} pokemon.</h4>
                        <h4 className="evolution-lettertype">{evolution.flavor_text_entries[0].flavor_text}</h4>

                </div>


            }




        </>
    )
}

export default PokemonEvolution;